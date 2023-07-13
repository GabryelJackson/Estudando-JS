// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem() {
    const alturaPaisagem = 1080;
    const larguraPaisagem = 1920;

    const altura = 1080;
    const largura = 1920;

    if(altura === alturaPaisagem && largura === larguraPaisagem) {
        return true;
    } else {
        return false;
    }
    
}

console.log(ePaisagem());