/* 
    Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
    Referência (mutável) - array, objct, function - Passados por referência
*/

const a = {
    nome: 'Pikachu',
    tipo: 'Raio'
};

const b = a;
console.log(a, b);

b.nome = 'Charmander';
console.log(a, b);