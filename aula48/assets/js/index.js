const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function cronometro() {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}

iniciar.addEventListener('click', function iniciarCronometro() {
    clearInterval(timer);
    timer = setInterval(function() {
        relogio.classList.remove('pausado');
        segundos++;
        relogio.innerHTML = cronometro(timer);
    }, 1000)
});

pausar.addEventListener('click', function pausei() {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function zerarTimer() {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});
