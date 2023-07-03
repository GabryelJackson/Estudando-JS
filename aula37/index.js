// For in -> lê os índices ou chaves do objeto

const pessoas = {
    nome: 'Gabryel',
    sobrenome: 'Jackson',
    idade: 25
};

for(let chave in pessoas) {
    console.log(chave, pessoas[chave]);
}

//               0        1       2
// const frutas = ['Pera', 'Maça', 'Uva'];

// for(let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for(let i=0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }