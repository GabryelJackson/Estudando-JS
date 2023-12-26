// Faça um algoritmo (sequência de passos) que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

function idadePessoa(ano, mes, dia) {
    const diasAno = 365;
    const diasMes = 30;

    const anoTotal = ano * diasAno;
    const mesTotal = mes * diasMes;
    const diaTotal = anoTotal + mesTotal + dia;

    return diaTotal;
}

const pessoa1 = idadePessoa(25, 12, 26);
console.log(`A idade em dias dessa pessoa é de: ${pessoa1}`);