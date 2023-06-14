function meuEscopo() {
    const form = document.getElementById('form');
    let resultado = document.getElementById('resultado');

    const data = new Date();
    console.log(data);

    function zeroAEsqurda(num) { // poderia fazer assim tbm: num >= 10 ? num : `0${num}`
        if(num >= 10) {
            return num;
        } else {
            return `0${num}`;
        }
    }   
    
    function formataData(evento) {
        evento.preventDefault();
        const dia = zeroAEsqurda(data.getDate());
        const mes = zeroAEsqurda(data.getMonth() + 1);
        const ano = zeroAEsqurda(data.getFullYear());
        const hora = zeroAEsqurda(data.getHours());
        const min = zeroAEsqurda(data.getMinutes());
        const seg = zeroAEsqurda(data.getSeconds());
    
        resultado.innerHTML += `<p>A data: <strong>${dia}/${mes}/${ano}</strong> e são: <strong>${hora}:${min}:${seg}</strong></p>`;
        // console.log(data);
    }
    form.addEventListener('submit', formataData)
}
meuEscopo();

const diaAtual = new Date();
const dataPassada = new Date (2023, 5, 6);
const dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime());
const diasDeDiferenca = Math.ceil(dataEmMilissegundos/(1000 * 60 * 60 * 24));
console.log(`A diferença de dias é ${diasDeDiferenca}`);