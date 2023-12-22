// const pokemon = {
//     nome: 'Bulbasaur',
//     tipo: 'Grass & Poison',
//     numero: 1
// };

// console.log(pokemon.nome);
// console.log(pokemon.tipo);
// console.log(pokemon.numero);

function criaPokemon(nome, tipo, numero) {
    return {
        nome: nome,
        tipo: tipo,
        numero: numero,
    };
};

const pokemon02 = criaPokemon('Charmander', 'Fire', 4);
const pokemon03 = criaPokemon('Charizard', 'Fire & Flying', 6);
const pokemon04 = criaPokemon('Blastoise', 'Water', 9);

console.log(pokemon02, pokemon03, pokemon04);

const pokemon = {
    nome: 'Caterpie',
    tipo: 'Bug', 
    numero: 10,

    fala() {
        console.log(`Olá! Meu nome é ${this.nome}, sou do tipo ${this.tipo} e minha numeração é ${this.numero}`)
    }
};

pokemon.fala();