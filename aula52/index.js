// return
// Retorna um valor
// Termina a função
function soma(a, b) {
    return a + b;
} 

function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    }
}

const p1 = criaPessoa('Gabryel', 'Jackson');
const p2 = {
    nome: 'Sacramento',
    sobrenome: 'Linhares'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function duplica(n) {
    return n*2;
}

function triplica(n) {
    return n*3;
}

function quadruplica(n) {
    return n*4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

function criaMultiplicador (multiplicador) {
    // multiplicador
    function multiplicacao(n) {
        return n  * multiplicador;
    }
    return multiplicacao;
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadruplica1 = criaMultiplicador(4);

console.log(duplica1(3));
console.log(triplica1(2));
console.log(quadruplica1(10));