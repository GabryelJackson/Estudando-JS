const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function cronometro() {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});

}

iniciar.addEventListener('click', function iniciarCronometro() {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = cronometro(timer);
    }, 1000)
});


