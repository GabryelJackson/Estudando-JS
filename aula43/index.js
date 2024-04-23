// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    if(largura === 1920 & altura === 1080) {
        return true;
    } else {
        return false;
    }
}

console.log(ePaisagem(1080, 1920));

// Trabalho de preguiçoso
const ePaisagem2 = (largura, altura) => largura === 1920 & altura === 1080 ? true : false;
console.log(ePaisagem2(1920, 1080));