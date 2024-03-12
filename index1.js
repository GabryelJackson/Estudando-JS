// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date();
// console.log(data.getDate());
// console.log(data.getMonth()+ 1);
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds());
// console.log(data.getDay());

function zeroAEsquerda(num) {
    return num <= 10 ? `0${num}` : num;
} 

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

