const data1 = new Date();
const mudarData = data1.getDay();
let diaDaSemanaTexto1;
const h1 = document.querySelector('.container h1');
h1.innerHTML = dayOfWeek(mudarData);

function dayOfWeek(mudarData) {
    switch(mudarData) {
        case 0: 
            diaDaSemanaTexto1 = 'Domingo';
            break;
        case 1: 
            diaDaSemanaTexto1 = 'Segunda';
            break;
        case 2: 
            diaDaSemanaTexto1 = 'Teça';
            break;
        case 3: 
            diaDaSemanaTexto1 = 'Quarta';
            break;
        case 4: 
            diaDaSemanaTexto1 = 'Quinta';
            break;
        case 5: 
            diaDaSemanaTexto1 = 'Sexta';
            break;
        case 6: 
            diaDaSemanaTexto1 = 'Sábado';
            break;
    }
    return diaDaSemanaTexto1;
}

console.log(data1, mudarData, dayOfWeek(mudarData));

