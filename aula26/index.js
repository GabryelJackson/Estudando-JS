const hora = 22;

if (hora >= 6 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!");
} else if (hora >= 0 && hora <= 5){
    console.log("Boa Madrugada!");
} else {
    console.log('Olá!');
}