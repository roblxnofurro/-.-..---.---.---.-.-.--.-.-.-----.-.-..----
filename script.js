/* ==========================================================
   CONFIGURACIÓN DE TIEMPOS (MILISEGUNDOS)
   Sincronizado con la duración real de music.mp3 (~166.5s,
   "Song of Healing"). Ajusta estos 3 valores si cambias de
   canción o quieres afinar la sincronía a oído.
========================================================== */
const TIMING_FORM_WORD = 4500;    // La máscara/partículas empiezan a converger
const TIMING_BREAK_WORD = 11000;  // La palabra se disuelve en luz de curación
const TIMING_SHOW_LETTER = 10000; // Aparece el pergamino y empieza a escribirse
const TYPING_SPEED = 30;          // Velocidad al escribir la carta

// Límite duro de partículas, evita que pantallas 4K generen miles y traben la animación
const MAX_PARTICLES = 900;

const FINAL_TEXT = "TE QUIERO";
const LETTER_TEXT = "Quería escribirte esto porque hay cosas que siento por ti que a veces no sé cómo decirte en persona. \n Supongo que una de las formas que tengo de expresar cariño es guardar pequeños pedacitos de las personas que quiero en las cosas que me gustan. Y contigo me pasa muchísimo. De alguna manera, canciones, juegos, palabras, lugares e incluso cosas tan simples como un caramelo terminan teniendo un significado diferente cuando pienso en ti. \n Por eso está Healing.\nLa Canción de Curación siempre me ha parecido especial. No porque haga desaparecer lo que duele, sino precisamente porque no lo hace. En *Majora’s Mask*, la canción no cambia lo que ocurrió. No borra los recuerdos ni reescribe la historia. Simplemente permite que aquello que alguna vez dolió pueda convertirse en algo que puedes llevar contigo.\nY creo que eso representa bastante bien lo que siento.\nPorque yo no quiero una relación en la que tengamos que fingir que nunca nos equivocamos o que nunca vamos a tener momentos difíciles. Quiero algo donde podamos hablar, entendernos, aprender y seguir adelante. Si alguna vez te hago sentir mal, quiero poder reconocerlo. Si alguna vez tenemos una discusión, quiero que podamos resolverla. Y si alguna vez algo nos duele, quiero que podamos convertirlo en una experiencia que nos haga conocernos y querernos mejor.\nPero, sobre todo, quiero que sepas que mi intención contigo siempre nace del cariño.\nNo puedo prometerte que nunca voy a equivocarme, porque sería mentirte. Soy una persona y seguramente habrá veces en las que diga algo mal, no sepa cómo actuar o simplemente me equivoque. Pero sí puedo prometerte que voy a intentar hacer las cosas con buenas intenciones, escucharte, aprender de mis errores y cuidar mucho la forma en la que te hago sentir.\nTe regalo mi 100%\nPorque me importas.\nMuchísimo más de lo que a veces sé explicar.\nMe gusta Zelda, sí. Me gustan sus historias, sus personajes, sus mundos y todas esas cosas que probablemente podría pasarme horas contándote. Pero entre todas esas historias hay algo que hace que ahora muchas de ellas me recuerden a ti.\nLa Luna de *Majora’s Mask*, por ejemplo.\nEs curioso que algo que en el juego representa una amenaza tan enorme termine siendo una de las cosas que más me hacen pensar en ti. Quizá porque la Luna también se siente como una de esas cosas que están siempre presentes, incluso cuando no estás pensando directamente en ellas.\nY luego están los caramelos.\nNo tienen una historia profunda.\nSimplemente me recuerdan a ti.\nComo muchas otras cosas.\nY creo que eso es lo que más me gusta de quererte: que poco a poco apareces en lugares donde antes no estabas.\nEn una canción que escucho.\nEn una escena de un juego.\nEn algo que veo por la calle.\nEn una pequeña tontería que sé que te gustaría.\nEn una conversación que recuerdo y me hace sonreír.\nY, de repente, algo que antes era solamente “algo que me gusta” se convierte en algo que quiero compartir contigo.\nNo sé exactamente en qué momento empezó a pasar.\nSolo sé que ahora hay muchas cosas que me gustan un poquito más porque puedo relacionarlas contigo.\nY también quiero que sepas que no espero que seas perfecta. No quiero que tengas que serlo conmigo. Me gustas siendo tú, con tus días buenos, tus días malos, tus pequeñas manías, tus ocurrencias y todas esas cosas que te hacen ser la persona que eres.\nMe gusta conocerte.\nMe gusta escucharte.\nMe gusta cuando me cuentas cosas que para ti parecen pequeñas, pero que yo termino recordando.\nMe gusta poder hacerte reír.\nMe gusta saber que puedo estar ahí para ti.\nY me gusta muchísimo la idea de seguir construyendo recuerdos contigo.\nQuizá por eso esta canción terminó significando tanto para mí.\nPorque si algún día vuelves a escucharla, quiero que recuerdes que para mí representa algo muy sencillo:\nque las cosas difíciles no tienen por qué destruir lo bonito que existe entre dos personas.\nQue podemos equivocarnos y aprender.\nQue podemos hacernos daño sin querer y después intentar hacerlo mejor.\nQue podemos tener días complicados y aun así elegir cuidarnos.\nY que, pase lo que pase, quiero que recuerdes que todo lo que hago contigo nace del cariño que te tengo.\nNo quiero que Healing borre nada.\nQuiero que, si alguna vez necesitamos sanar algo, nos recuerde que todavía podemos seguir adelante.\nY supongo que después de tantas palabras, hay una forma mucho más sencilla de decir todo esto.\nTe quiero. \n Te quiero de una manera que hace que mis juegos favoritos tengan nuevas historias, que ciertas canciones tengan nuevos significados y que pequeñas cosas que antes no significaban demasiado ahora me hagan pensar inmediatamente en ti. \n Y si alguna vez me preguntas qué significan todas esas cosas que fui guardando alrededor de ti, probablemente nunca voy a encontrar una explicación tan buena como esta: \n eres tú. \n Y me haces querer compartir contigo todas esas pequeñas partes de mi mundo que tanto quiero. \n Así que, si alguna vez escuchas esta melodía y piensas en mí, espero que recuerdes solamente una cosa: \n que te quiero muchísimo, que me importas de verdad y que, mientras pueda, voy a seguir intentando que estar conmigo sea un lugar donde puedas sentirte querida, cómoda y feliz. \n Con todo mi cariño. 🫪\n";

const MOON_IMG_SRC = "Luna_Artwork_MM_3D.png";

/* ==========================================================
   AUDIO
   - ambient  : suena en bucle mientras NO se pulsa el botón
   - sfx      : golpe corto al pulsar el botón
   - bgm      : la canción de la secuencia
========================================================== */
const AMBIENT_VOLUME = 0.30;   // ambiente de fondo, discreto
const MUSIC_VOLUME   = 0.50;   // volumen final de music.mp3
const SFX_VOLUME     = 0.75;   // volumen de start.mp3
const MUSIC_DELAY    = 1100;   // ms de aire entre start.mp3 y la canción

/* ==========================================================
   HADAS
========================================================== */
const FAIRY_SRC = "OoT3D_Navi_Render.png";
const FAIRY_BASE_HUE = 250;                       // tono original de Navi (azul-violeta)
const FAIRY_HUES = [190, 280, 330, 45, 140, 15, 95]; // celeste, violeta, rosa, dorado, verde, ámbar, lima

const canvas = document.getElementById('coreCanvas');
const ctx = canvas.getContext('2d');
const uiLayer = document.getElementById('ui-layer');
const letterLayer = document.getElementById('letter-layer');
const btnIgnite = document.getElementById('btn-ignite');
const btnReset = document.getElementById('btn-reset');
const bgm = document.getElementById('bgm');
const ambient = document.getElementById('ambient');
const sfxStart = document.getElementById('sfx-start');
const fairyLayer = document.getElementById('fairy-layer');
const typedTextEl = document.getElementById('typed-text');

let width, height;
let particles = [];
let stars = [];
let shootingStars = [];
let moon = null;
let targetCoordinates = [];
let phase = 0;
let animationId;
let running = false;
let sequenceStartTime = 0;

// Tiempo (ms) que tarda la luna en caer a su posición final — independiente
// de la duración de la canción, así se nota el descenso desde el principio.
const MOON_FALL_DURATION = 9000;

let phaseTimeouts = [];
let typeTimeout;
let audioFadeInterval;
let lastAudioTime = 0;

const mouse = { x: 0, y: 0, easeX: 0, easeY: 0 };

// Notas de ocarina / fragmentos de luz en vez de dígitos binarios
const GLYPH_CHARS = ['♪', '♫', '♬'];
// Paleta: mayoría verde curación, con acentos morados de la luna
const HEALING_COLORS = ['#49ffb0', '#8effd4', '#eafff2', '#49ffb0', '#8b3dff'];

/* ==========================================================
   SPRITES DE BRILLO PRE-RENDERIZADOS
   En vez de usar ctx.shadowBlur (muy costoso, se recalcula
   por objeto en cada frame), dibujamos una sola vez un
   degradado radial por color y luego lo reutilizamos con
   drawImage(), que es mucho más barato.
========================================================== */
function createGlowSprite(color, size) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const gctx = c.getContext('2d');
    const grad = gctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, color);
    grad.addColorStop(0.4, color + 'aa');
    grad.addColorStop(1, color + '00');
    gctx.fillStyle = grad;
    gctx.beginPath();
    gctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    gctx.fill();
    return c;
}

const GLOW_SIZE = 48;
const GLOW_SPRITES = HEALING_COLORS.map(c => createGlowSprite(c, GLOW_SIZE));
const MOON_GLOW = createGlowSprite('#8b3dff', 512);

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    if (moon) moon.onResize();

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
let resizeDebounce;
window.addEventListener('resize', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(resize, 150);
});
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

// Pausar el render cuando la pestaña no está visible (ahorra batería y evita
// que se acumulen frames pendientes que luego "traban" la animación al volver).
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
    } else if (!animationId) {
        animate();
    }
});

/* ==========================================================
   LA LUNA — imagen real, desciende lentamente durante toda la canción
========================================================== */
const moonImg = new Image();
let moonImgReady = false;
moonImg.onload = () => { moonImgReady = true; };
moonImg.src = MOON_IMG_SRC;

class Moon {
    constructor() {
        this.onResize();
    }
    onResize() {
        // Coincide exactamente con la luna estática (.moon-backdrop) de la pantalla
        // de inicio, para que al presionar el botón sea la MISMA luna la que baja,
        // sin saltos ni duplicados.
        const isMobile = width < 768;
        this.baseSize = isMobile
            ? Math.min(width * 0.40, height * 0.32, 220)
            : Math.min(width * 0.30, height * 0.34, 360);
        const topPct = isMobile ? 0.02 : 0.06;
        this.startY = topPct * height + this.baseSize / 2;
        this.endY = height * 0.28;
        this.x = width / 2; // centrada, y se mantiene centrada al caer
    }
    // progress: 0..1 según el tiempo transcurrido (ver MOON_FALL_DURATION)
    draw(ctx, progress) {
        const y = this.startY + (this.endY - this.startY) * progress;
        const size = this.baseSize * (1 + progress * 0.08);

        // Brillo detrás (un solo drawImage, barato)
        const glowSize = size * 2.1;
        ctx.globalAlpha = 0.42;
        ctx.drawImage(MOON_GLOW, this.x - glowSize / 2, y - glowSize / 2, glowSize, glowSize);
        ctx.globalAlpha = 1;

        if (moonImgReady) {
            ctx.drawImage(moonImg, this.x - size / 2, y - size / 2, size, size);
        }
    }
}

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
        ctx.fillStyle = `rgba(234, 255, 242, ${this.alpha})`;
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
        ctx.strokeStyle = "rgba(142, 255, 212, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

/* ==========================================================
   PARTÍCULAS DE LUZ SANADORA
========================================================== */
class Particle {
    constructor(x, y, colorIndex) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.char = GLYPH_CHARS[Math.floor(Math.random() * GLYPH_CHARS.length)];
        this.colorIndex = colorIndex;
        this.color = HEALING_COLORS[colorIndex];

        const isMobile = width < 768;
        this.size = isMobile ? (Math.random() * 8 + 8) : (Math.random() * 12 + 10);

        this.targetX = x;
        this.targetY = y;
        this.friction = 0.82;
        this.spring = 0.07;
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * (width / 2);
        this.ambientPhaseOffset = Math.random() * Math.PI * 2;
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
        } else if (phase === 3) {
            // Fase ambiental: la luz asciende suavemente, como sanando el cielo
            this.vy -= 0.01;
            this.vx += Math.sin((Date.now() * 0.001) + this.ambientPhaseOffset) * 0.02;
            this.vx *= 0.96;
            this.vy *= 0.96;
            if (this.y < -20) { this.y = height + 20; this.x = Math.random() * width; }
        } else {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(ctx) {
        // Brillo barato vía sprite pre-renderizado en vez de shadowBlur.
        // Se mantiene sutil para que el texto formado se lea nítido en vez de "derretido".
        const fast = phase === 2 && Math.abs(this.vx) > 5;
        const glowSize = fast ? this.size * 2.6 : this.size * 1.3;
        ctx.globalAlpha = fast ? 0.85 : 0.3;
        ctx.drawImage(GLOW_SPRITES[this.colorIndex], this.x - glowSize / 2, this.y - glowSize / 2, glowSize, glowSize);
        ctx.globalAlpha = 1;

        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.size}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, this.x, this.y);
    }
}

/* ==========================================================
   HADAS DE COLORES — elementos DOM (usan tu PNG de Navi),
   vuelan con un deambular suave por toda la pantalla.
========================================================== */
let fairies = [];

class Fairy {
    constructor(hue, index) {
        const color = `hsl(${hue}, 95%, 72%)`;
        const size = (width < 768 ? 26 : 34) + Math.random() * (width < 768 ? 16 : 24);

        const el = document.createElement('div');
        el.className = 'fairy';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.setProperty('--fc', color);
        el.style.setProperty('--fo', (0.55 + Math.random() * 0.3).toFixed(2));

        const aura = document.createElement('span');
        aura.className = 'fairy-aura';

        const img = document.createElement('img');
        img.className = 'fairy-img';
        img.src = FAIRY_SRC;
        img.alt = '';
        img.style.filter = `hue-rotate(${hue - FAIRY_BASE_HUE}deg) saturate(1.6) drop-shadow(0 0 10px ${color})`;
        img.style.animationDuration = (0.34 + Math.random() * 0.22).toFixed(2) + 's';

        el.appendChild(aura);
        el.appendChild(img);
        fairyLayer.appendChild(el);

        this.el = el;
        this.size = size;
        this.x = Math.random() * width;
        this.y = height * 0.25 + Math.random() * height * 0.6;
        this.vx = 0;
        this.vy = 0;
        this.ph = Math.random() * Math.PI * 2;
        this.pickTarget();

        // Entran escalonadas, no todas de golpe
        setTimeout(() => el.classList.add('is-visible'), 500 + index * 320);
    }

    pickTarget() {
        const m = 60;
        let tx = m + Math.random() * (width - m * 2);
        let ty = m + Math.random() * (height - m * 2);

        // Evitan la franja central para no estorbar al texto ni a la carta
        if (tx > width * 0.30 && tx < width * 0.70 && ty > height * 0.30 && ty < height * 0.78) {
            tx = Math.random() < 0.5 ? m + Math.random() * width * 0.26
                                     : width * 0.74 + Math.random() * (width * 0.26 - m);
        }
        this.tx = tx;
        this.ty = ty;
    }

    update() {
        const dx = this.tx - this.x;
        const dy = this.ty - this.y;
        if (Math.hypot(dx, dy) < 40) this.pickTarget();

        this.vx += dx * 0.0016;
        this.vy += dy * 0.0016;
        this.vx *= 0.97;
        this.vy *= 0.97;

        // Tope de velocidad: vuelo tranquilo, nunca frenético
        const max = 2.4;
        this.vx = Math.max(-max, Math.min(max, this.vx));
        this.vy = Math.max(-max, Math.min(max, this.vy));

        const t = Date.now() * 0.001;
        this.x += this.vx + Math.sin(t * 1.6 + this.ph) * 0.4;
        this.y += this.vy + Math.cos(t * 1.2 + this.ph) * 0.35;

        this.el.style.transform =
            `translate3d(${(this.x - this.size / 2).toFixed(1)}px, ${(this.y - this.size / 2).toFixed(1)}px, 0)`;
    }

    remove() {
        this.el.classList.add('is-out');
        const el = this.el;
        setTimeout(() => el.remove(), 1000);
    }
}

function spawnFairies() {
    removeFairies();
    const count = width < 768 ? 4 : 6;
    const hues = [...FAIRY_HUES].sort(() => Math.random() - 0.5).slice(0, count);
    fairies = hues.map((h, i) => new Fairy(h, i));
}

function removeFairies() {
    fairies.forEach(f => f.remove());
    fairies = [];
}

/* ==========================================================
   HELPERS DE AUDIO (fundidos suaves)
========================================================== */
function fadeAudio(el, to, ms, onDone) {
    if (el._fadeId) clearInterval(el._fadeId);
    const steps = Math.max(1, Math.round(ms / 50));
    const from = el.volume;
    let i = 0;
    el._fadeId = setInterval(() => {
        i++;
        el.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
        if (i >= steps) {
            clearInterval(el._fadeId);
            el._fadeId = null;
            if (onDone) onDone();
        }
    }, 50);
}

// Los navegadores bloquean el audio hasta que hay una interacción del usuario.
// Intentamos reproducir el ambiente; si nos lo bloquean, lo activamos con el
// primer clic/toque/tecla en cualquier parte de la página.
let ignited = false;
let unlockArmed = false;

function armAmbientUnlock() {
    if (unlockArmed) return;
    unlockArmed = true;
    const events = ['pointerdown', 'touchstart', 'keydown'];
    const go = () => {
        unlockArmed = false;
        events.forEach(e => window.removeEventListener(e, go));
        if (!ignited && !running) startAmbient(1500);
    };
    events.forEach(e => window.addEventListener(e, go, { passive: true }));
}

function startAmbient(fadeMs = 3000) {
    if (ignited) return;
    ambient.volume = 0;
    const p = ambient.play();
    if (p && p.then) {
        p.then(() => fadeAudio(ambient, AMBIENT_VOLUME, fadeMs))
         .catch(() => armAmbientUnlock());
    } else {
        fadeAudio(ambient, AMBIENT_VOLUME, fadeMs);
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

    const fontSize = Math.min(width / 4, 150);
    offCtx.fillStyle = 'white';
    offCtx.font = `bold ${fontSize}px Cinzel, serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    // Un poco más abajo del centro, para dejar aire bajo la luna
    offCtx.fillText(FINAL_TEXT, width / 2, height * 0.6);

    const imageData = offCtx.getImageData(0, 0, width, height).data;
    const coords = [];
    const step = width < 768 ? 6 : 8;
    for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
            const alpha = imageData[((y * width + x) * 4) + 3];
            if (alpha > 128) coords.push({ x, y });
        }
    }

    // Si hay demasiados puntos (pantallas grandes), muestreamos para
    // no exceder MAX_PARTICLES y mantener la animación fluida.
    if (coords.length > MAX_PARTICLES) {
        const factor = coords.length / MAX_PARTICLES;
        const sampled = [];
        for (let i = 0; i < coords.length; i += factor) {
            sampled.push(coords[Math.floor(i)]);
        }
        return sampled;
    }
    return coords;
}

function initEnvironment(targetCoords) {
    particles = [];
    const starCount = width < 768 ? 80 : 150;
    stars = Array.from({ length: starCount }, () => new Star());
    shootingStars = Array.from({ length: 3 }, () => new ShootingStar());
    moon = new Moon();
    targetCoords.forEach(() => {
        const colorIndex = Math.floor(Math.random() * HEALING_COLORS.length);
        particles.push(new Particle(Math.random() * width, Math.random() * height, colorIndex));
    });
}

// Cielo en reposo: estrellas y estrellas fugaces desde que carga la página,
// para que la pantalla de inicio no se vea como un vacío negro estático.
// Sin luna ni partículas de texto todavía — eso llega recién al pulsar el botón.
function initIdleSky() {
    const starCount = width < 768 ? 60 : 110;
    stars = Array.from({ length: starCount }, () => new Star());
    shootingStars = Array.from({ length: 2 }, () => new ShootingStar());
}

// Arranca el cielo en reposo apenas cargan las clases de arriba, para que la
// pantalla de inicio se vea viva desde el primer frame.
initIdleSky();
animationId = requestAnimationFrame(animate);

function animate() {
    mouse.easeX += (mouse.x - mouse.easeX) * 0.05;
    mouse.easeY += (mouse.y - mouse.easeY) * 0.05;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, width, height);

    if (moon) {
        const elapsed = Date.now() - sequenceStartTime;
        const linear = Math.min(elapsed / MOON_FALL_DURATION, 1);
        const progress = 1 - Math.pow(1 - linear, 3); // ease-out: cae rápido y frena al llegar
        moon.draw(ctx, progress);
    }

    stars.forEach(s => { s.update(); s.draw(ctx); });
    shootingStars.forEach(s => { s.update(); s.draw(ctx); });
    particles.forEach(p => { p.update(); p.draw(ctx); });
    fairies.forEach(f => f.update());
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

function clearAllTimers() {
    phaseTimeouts.forEach(clearTimeout);
    phaseTimeouts = [];
    clearTimeout(typeTimeout);
}

function startSequence() {
    clearAllTimers();
    phase = 1;

    phaseTimeouts.push(setTimeout(() => {
        phase = 2;
        particles.forEach((p, index) => {
            if (!targetCoordinates[index]) return;
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

    // Fase ambiental: la luz sube suavemente mientras dura el resto de la canción
    phaseTimeouts.push(setTimeout(() => {
        phase = 3;
    }, TIMING_SHOW_LETTER + 4000));
}

btnIgnite.addEventListener('click', async () => {
    if (running) return;
    ignited = true;

    uiLayer.classList.add('hidden');
    document.body.classList.add('is-running');

    // 1) Golpe de inicio
    try {
        sfxStart.currentTime = 0;
        sfxStart.volume = SFX_VOLUME;
        sfxStart.play().catch(() => {});
    } catch (e) { /* silencioso */ }

    // 2) El ambiente se apaga suavemente
    fadeAudio(ambient, 0, 1200, () => ambient.pause());

    // 3) Las hadas entran a volar
    spawnFairies();

    await document.fonts.ready;

    // 4) Tras un respiro, arranca la canción y la secuencia visual a la vez
    phaseTimeouts.push(setTimeout(() => {
        targetCoordinates = getTextCoordinates();
        initEnvironment(targetCoordinates);

        bgm.volume = 0;
        bgm.currentTime = 0;
        lastAudioTime = 0;
        bgm.play().catch(e => console.log("Audio no pudo iniciar", e));
        fadeAudio(bgm, MUSIC_VOLUME, 4000);

        running = true;
        sequenceStartTime = Date.now();
        if (!animationId) animate();

        startSequence();
    }, MUSIC_DELAY));
});


/* ==========================================================
   ARRANQUE: el ambiente suena desde que se abre la página
========================================================== */
startAmbient(4000);
