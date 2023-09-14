// Filter - Sempre retornar um array, com a mesma quantidade de elementos ou menos;

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor) {
    if(valor >= 50) {
        return true;
        
    } else {
        return false;
    }
}
const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(function(object) {
    if(object.nome.length >= 5) {
        return true;
    }
});
console.log(pessoasComNomeGrande);
const pessoasComMaisDe50anos = pessoas.filter(function(object) {
    if(object.idade > 50) {
        return true;
    }
});
console.log(pessoasComMaisDe50anos);
const nomeTerminaComA = pessoas.filter(function(object) {
    if(object.nome.toLowerCase().endsWith('a')) {
        return true;
    }
});
console.log(nomeTerminaComA);
