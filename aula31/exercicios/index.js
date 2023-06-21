function temperatura() {
    const num1 = 36.5;

    if(num1 >= 37.5) {
        console.log('Tem febre');
    } else if(num1 <= 35) {
        console.log('Temperatura muito baixa');
    } else {
        console.log('Saudável');
    }
}

temperatura();

function idadeEGenero() {
    const idade = 25;
    const genero = 'Masculino';

    if(genero === 'Masculino' && idade < 25) {
        console.log("O jovem é menor de idade");
    } else if(genero === 'Feminino' && idade < 25) {
        console.log("A jovem é menor de idade");
    } else if(genero === 'Masculino' && idade >= 25) {
        console.log("O Homem é maior de idade");
    } else if(genero === 'Feminino' && idade >= 25) {
        console.log("A mulher é maior de idade")
    }

}

idadeEGenero();

function intervalo() {
    const num2 = 2;

    if(num2 === 1) {
        console.log('Número um');
    } else if(num2 === 2) {
        console.log('Número dois');
    } else if(num2 === 3) {
        console.log('Número três');
    } else if(num2 === 4) {
        console.log('Número quatro');
    } else if(num2 === 5) {
        console.log('Número cinco');
    } else {
        console.log('Outro valor')
    }
}

intervalo();

function intervalo2() {
    const num3 = 4;

    switch(num3) {
        case 1:
            console.log('Número um');
            break
        case 2:
            console.log('Número dois');
            break 
        case 3:
            console.log('Número três');
            break
        case 4:
            console.log('Número quatro');
            break
        case 5:
            console.log('Número cinco');
            break
        default:
            console.log('Outro valor');
            break
    }
}

intervalo2();