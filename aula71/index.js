// Factory function / Constructor function / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);

    // return this
}
// {} <- this -> this
const p1 = new Pessoa('Gabryel', 'Jackson');
delete p1.nome;
console.log(p1);

const p2 = {};

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto());

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//      return (`${this.nome} está falando seu nome.`)
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };
// const chave = 'sobrenome';
// console.log(pessoa[chave]);
