const h1 = document.querySelector('.container h1');
const data = new Date();
const diaDaSemana = data.getDay();
const diaAtual = zeroAEsquerda(data.getDate());
const numeroMes = data.getMonth();
const anoAtual = data.getFullYear();
const horaAtual = zeroAEsquerda(data.getHours());
const minutosAtuais = zeroAEsquerda(data.getMinutes());
function numeroDiaSemana(diaDaSemana) {
    const diasDaSemana = ['Domingo', 'Segunda','Terça','Quarta','Quinta-feira','Sexta','Sábado',];
    return diasDaSemana[diaDaSemana];
}
function numeroDoMes(numeroMes) {
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mesesDoAno[numeroMes];
}
function zeroAEsquerda(num) {
    return num <= 10 ? `0${num}` : num;
}

h1.innerHTML = numeroDiaSemana(diaDaSemana) + ', ' + diaAtual + ' de ' + numeroDoMes(numeroMes) + ' de ' + anoAtual + ' às ' + horaAtual + ':' + minutosAtuais;


