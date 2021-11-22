import translateFunc from "./modules/translateFunc.js";

let englishForm = document.querySelector(".container__input--english");
let morseForm = document.querySelector(".container__input--morse");

const engObj = {
    a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
    e: '.',       f: '..-.',    g: '--.',     h: '....',
    i: '..',      j: '.---',    k: '-.-',     l: '.-..',
    m: '--',      n: '-.',      o: '---',     p: '.--.',
    q: '--.-',    r: '.-.',     s: '...',     t: '-',
    u: '..-',     v: '...-',    w: '.--',     x: '-..-',
    y: '-.--',    z: '--..',    1: '.----',   2: '..---',
    3: '...--',   4: '....-',   5: '.....',   6: '-....',
    7: '--...',   8: '---..',   9: '----.',   0: '-----',

    '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
    "'": '.----.',    '/': '-..-.',     '(': '-.--.',
    ')': '-.--.-',    '&': '.-...',     ':': '---...',
    ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
    '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
    '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
    ' ': '/',
};

let morseObj = Object.fromEntries(Object.entries(engObj).map(kvp => kvp.reverse()));

// Event listeners for active translation
englishForm.addEventListener('input', (event) => {
    translateFunc(englishForm, engObj, morseForm)
})
morseForm.addEventListener('input', (event) => {
    translateFunc(morseForm, morseObj, englishForm)
})



