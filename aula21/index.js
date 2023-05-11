/* 
    Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
    Referência (mutável) - array, objct, function - Passados por referência
*/

const a = {
    nome: 'Gabryel',
    sobrenome: 'Jackson'
}

const b = a

b.nome = 'Samuel'
console.log(a)