const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

// Continue - continua para a próxima interaçao;
//  Break sai do laço;

do {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }

    console.log(numero);

    i++;

} while(i < numeros.length);