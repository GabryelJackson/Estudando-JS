const pessoa = {
    nome: 'Gabryel',
    sobrenome: 'Jackson',
    idade: 24,
    endereco: {
        rua: 'QSC 10',
        numero: 7
    }
};

// Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);