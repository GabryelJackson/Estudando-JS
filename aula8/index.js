/* 
    Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8  altura e seu IMC é de 25.92
    Luiz Otávio nasceu em 1980
*/

const nome = 'Gabryel';
const sobrenome = 'Jackson';
const idade = 25;
const peso = 65;
const altura = 1.83;
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);