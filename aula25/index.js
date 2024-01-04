/* 
    && - AND - 
    || - OR -

    FALSY
    false
    0
    '', "", ``
    null / undefined
    NaN
*/ 

const falaOi = () => 'Oi';

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Gabryel' || true);

// let corUsuario = 'vermelho';
// let corPadrao = corUsuario || 'preto';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
