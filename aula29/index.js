/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000 
const data = new Date(0 + tresHoras + umDia);
const data = new Date(2019, 3); // a, m, d, h, M, s, ms

const data = new Date(1686707171553);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());
*/

function zeroAEsqurda(num) { // poderia fazer assim tbm: num >= 10 ? num : `0${num}`
    if(num >= 10) {
        return num;
    } else {
        return `0${num}` 
    }
}   

function formataData(data) {
    const dia = zeroAEsqurda(data.getDate());
    const mes = zeroAEsqurda(data.getMonth() + 1);
    const ano = zeroAEsqurda(data.getFullYear());
    const hora = zeroAEsqurda(data.getHours());
    const min = zeroAEsqurda(data.getMinutes());
    const seg = zeroAEsqurda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
    // console.log(data);
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);