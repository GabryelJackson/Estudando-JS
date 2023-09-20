// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2;
});

console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(function(object) {
    return object.nome;
});
console.log(nomes);

const idades = pessoas.map(function(object) {
    return object.idade;
});
console.log(idades);

const ids = pessoas.map(function(object, indice) {
    const novoObjeto = {...object}
    novoObjeto.id = indice + 1;
    return novoObjeto;
});
console.log(ids);