function sim () {
    
}

function desvia() {
    let botaoNao = document.querySelector('.nao');
    botaoNao.style.position = 'absolute';
    botaoNao.style.bottom = aleatorio(0, 100) + "%";
    botaoNao.style.right = aleatorio(0, 100) + "%";
} 

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}