//  Escreva uma função que recebe 2 números e retorne o maior deles

function twoNumbers(x, y) {
    if(x > y) {
        return x;
    } else if (y > x) {
        return y;
    }
}
// Trabalho de preguiçoso
const function2 = (x, y) => x > y ? x : y; /* Arrow Function*/
console.log(function2(54, 423));

