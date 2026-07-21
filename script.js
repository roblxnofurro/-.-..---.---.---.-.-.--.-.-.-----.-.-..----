/* ==========================================================
   CONFIGURACIÓN DE TIEMPOS (MILISEGUNDOS)
   Ajusta estos 3 valores si quieres sincronizarlo aún mejor 
   con el inicio exacto de tu MP3. 1000 = 1 segundo.
========================================================== */
const TIMING_FORM_WORD = 4000;   // Tiempo en que se forma la palabra
const TIMING_BREAK_WORD = 11000; // Tiempo en que se disuelve la palabra
const TIMING_SHOW_LETTER = 11000; // Tiempo en que aparece el pergamino
const TYPING_SPEED = 75;         // Velocidad al escribir la carta

const FINAL_TEXT = "PENE";
const LETTER_TEXT = "no deberias estar aqui.";

const canvas = document.getElementById('coreCanvas');
const ctx = canvas.getContext('2d');
const uiLayer = document.getElementById('ui-layer');
const letterLayer = document.getElementById('letter-layer');
const btnIgnite = document.getElementById('btn-ignite');
const btnReset = document.getElementById('btn-reset');
const bgm = document.getElementById('bgm');
const typedTextEl = document.getElementById('typed-text');

let width, height;
let particles = [];
let stars = [];
let shootingStars = [];
let targetCoordinates = [];
let phase = 0; 
let animationId;

let phaseTimeouts = [];
let typeTimeout;
let audioFadeInterval;

const mouse = { x: 0, y: 0, easeX: 0, easeY: 0 };
const BINARY_CHARS = ['0', '1'];
const UV_COLORS = ['#8b3dff', '#a855f7', '#d7b8ff', '#ffffff'];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    if (phase >= 1) {
        targetCoordinates = getTextCoordinates();
        particles.forEach((p, index) => {
            if (targetCoordinates[index]) {
                p.targetX = targetCoordinates[index].x;
                p.targetY = targetCoordinates[index].y;
            } else {
                p.targetX = width / 2;
                p.targetY = height / 2;
            }
        });
    }
}
window.addEventListener('resize', resize);
resize();

// Evento Mouse para PC
window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX - width / 2) / (width / 2);
    mouse.y = (e.clientY - height / 2) / (height / 2);
});

// Evento Touch para Celulares
window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouse.x = (e.touches[0].clientX - width / 2) / (width / 2);
        mouse.y = (e.touches[0].clientY - height / 2) / (height / 2);
    }
}, { passive: true });

/* ==========================================================
   ENTIDADES DEL CIELO
========================================================== */
class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 3 + 1;
        this.size = Math.random() * 1.5;
        this.alpha = Math.random() * 0.8 + 0.2;
    }
    update() {
        this.x -= mouse.easeX * (3 / this.z);
        this.y -= mouse.easeY * (3 / this.z);
        if (this.x < 0) this.x += width;
        if (this.x > width) this.x -= width;
        if (this.y < 0) this.y += height;
        if (this.y > height) this.y -= height;
    }
    draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class ShootingStar {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * width * 1.5;
        this.y = -150;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 10 + 6;
        this.active = false;
        this.wait = Math.random() * 300 + 100;
    }
    update() {
        if (!this.active) {
            this.wait--;
            if (this.wait <= 0) this.active = true;
            return;
        }
        this.x -= this.speed + (mouse.easeX * 2);
        this.y += this.speed - (mouse.easeY * 2);
        if (this.y > height + 200 || this.x < -200) this.reset();
    }
    draw(ctx) {
        if (!this.active) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y - this.length);
        ctx.strokeStyle = "rgba(215, 184, 255, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

/* ==========================================================
   PARTÍCULAS BINARIAS
========================================================== */
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.char = BINARY_CHARS[Math.floor(Math.random() * BINARY_CHARS.length)];
        this.color = UV_COLORS[Math.floor(Math.random() * UV_COLORS.length)];
        
        // Ajuste de tamaño de partícula para móviles
        const isMobile = width < 768;
        this.size = isMobile ? (Math.random() * 8 + 8) : (Math.random() * 12 + 10);
        
        this.targetX = x;
        this.targetY = y;
        this.friction = 0.88; 
        this.spring = 0.03;   
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * (width / 2);
    }

    update() {
        if (phase === 1) {
            this.angle += 0.015; // Órbita lenta, melancólica
            this.orbitRadius -= this.orbitRadius * 0.01; 
            const destX = (width / 2) + Math.cos(this.angle) * this.orbitRadius;
            const destY = (height / 2) + Math.sin(this.angle) * this.orbitRadius;
            this.vx += (destX - this.x) * 0.05;
            this.vy += (destY - this.y) * 0.05;
            this.vx *= 0.9;
            this.vy *= 0.9;
        } else if (phase === 2) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            this.vx += dx * this.spring;
            this.vy += dy * this.spring;
            this.vx *= this.friction;
            this.vy *= this.friction;
        } else {
            this.x += this.vx;
            this.y += this.vy;
            if(this.x < 0 || this.x > width) this.vx *= -1;
            if(this.y < 0 || this.y > height) this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.size}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        if (phase === 2 && Math.abs(this.vx) > 5) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ffffff';
        } else {
            ctx.shadowBlur = 5;
            ctx.shadowColor = this.color;
        }
        ctx.fillText(this.char, this.x, this.y);
        ctx.shadowBlur = 0; 
    }
}

/* ==========================================================
   INICIALIZACIÓN
========================================================== */
function getTextCoordinates() {
    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d');
    offCanvas.width = width;
    offCanvas.height = height;
    
    // Escala del texto adaptada a móvil
    const fontSize = Math.min(width / 4, 150); 
    offCtx.fillStyle = 'white';
    offCtx.font = `bold ${fontSize}px Cinzel, serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(FINAL_TEXT, width / 2, height / 2);

    const imageData = offCtx.getImageData(0, 0, width, height).data;
    const coords = [];
    const step = width < 768 ? 6 : 8; // Más densidad en móvil para que se lea mejor
    for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
            const alpha = imageData[((y * width + x) * 4) + 3];
            if (alpha > 128) coords.push({ x, y });
        }
    }
    return coords;
}

function initEnvironment(targetCoords) {
    particles = [];
    // Menos estrellas en móvil para mejor rendimiento
    const starCount = width < 768 ? 80 : 150; 
    stars = Array.from({ length: starCount }, () => new Star());
    shootingStars = Array.from({ length: 3 }, () => new ShootingStar());
    targetCoords.forEach(() => {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
    });
}

function animate() {
    mouse.easeX += (mouse.x - mouse.easeX) * 0.05;
    mouse.easeY += (mouse.y - mouse.easeY) * 0.05;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; 
    ctx.fillRect(0, 0, width, height);
    stars.forEach(s => { s.update(); s.draw(ctx); });
    shootingStars.forEach(s => { s.update(); s.draw(ctx); });
    particles.forEach(p => { p.update(); p.draw(ctx); });
    animationId = requestAnimationFrame(animate);
}

/* ==========================================================
   CONTROLADORES
========================================================== */
function typeLetter(text, element, speed = TYPING_SPEED) {
    element.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            typeTimeout = setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

btnIgnite.addEventListener('click', async () => {
    uiLayer.classList.add('hidden');
    bgm.volume = 0;
    bgm.play().catch(e => console.log("Audio no pudo iniciar", e));
    
    let vol = 0;
    audioFadeInterval = setInterval(() => {
        if(vol < 0.5) { vol += 0.02; bgm.volume = vol; }
        else clearInterval(audioFadeInterval);
    }, 200);

    await document.fonts.ready;
    targetCoordinates = getTextCoordinates();
    initEnvironment(targetCoordinates);
    
    if(!animationId) animate();

    phase = 1;

    // Sincronización basada en las variables de configuración
    phaseTimeouts.push(setTimeout(() => {
        phase = 2;
        particles.forEach((p, index) => {
            p.targetX = targetCoordinates[index].x;
            p.targetY = targetCoordinates[index].y;
            p.vx = (Math.random() - 0.5) * 80;
            p.vy = (Math.random() - 0.5) * 80;
        });
    }, TIMING_FORM_WORD)); 

    phaseTimeouts.push(setTimeout(() => {
        particles.forEach(p => p.spring = 0.1); 
        
        phaseTimeouts.push(setTimeout(() => {
            letterLayer.classList.remove('hidden');
            typeLetter(LETTER_TEXT, typedTextEl);
        }, (TIMING_SHOW_LETTER - TIMING_BREAK_WORD)));
    }, TIMING_BREAK_WORD));
});

btnReset.addEventListener('click', () => {
    phaseTimeouts.forEach(clearTimeout);
    phaseTimeouts = [];
    clearTimeout(typeTimeout);
    clearInterval(audioFadeInterval);
    
    bgm.pause();
    bgm.currentTime = 0; 
    
    letterLayer.classList.add('hidden');
    cancelAnimationFrame(animationId);
    animationId = null;
    ctx.clearRect(0, 0, width, height);
    particles = [];
    stars = [];
    shootingStars = [];
    phase = 0;
    typedTextEl.innerHTML = '';
    
    setTimeout(() => {
        uiLayer.classList.remove('hidden');
    }, 1000);
});
