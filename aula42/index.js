//  Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero() {
    let num1 = 2;
    let num2 = 4;

    if(num1 > num2) {
        console.log(`${num1} é maior que ${num2}`);
    } else if(num2 > num1) {
        console.log(`${num2} é maior que ${num1}`);
    }
}

maiorNumero();