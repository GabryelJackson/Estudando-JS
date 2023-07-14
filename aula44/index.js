// Escreva uma função que recebee um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números dee 0 a 100

function recebeNumero() {
    let num1 = 100;

    if(typeof num1 !== 'number') {
        console.log(`Esse valor: ${num1}, não é um número!`);
    }

    if(num1 % 3 === 0 && num1 % 5 === 0) {
        console.log('FizzBuzz');
    } else if(num1 % 5 === 0) {
        console.log('Buzz');
    } else if(num1 % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(num1);
    }
}

recebeNumero();