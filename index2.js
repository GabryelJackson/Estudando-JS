const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function cronometro(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'})
}

function iniciaRelogio() {
    const contador = setInterval(function() {
        segundos++;
        timer.innerHTML = cronometro(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    iniciaRelogio();
});
