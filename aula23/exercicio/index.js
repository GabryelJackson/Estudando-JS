function comparar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let texto = document.getElementById('texto');

    console.log(numero1);
    console.log(numero2);

    if(numero1 > numero2) {
        document.getElementById('texto').innerHTML += '<p>O primeiro número é maior que o segundo número</p>';
    } else if(numero1 < numero2) {
        document.getElementById('texto').innerHTML += '<p>O primeiro número é menor que o segundo número</p>';
    } else if(numero1 === numero2) {
        document.getElementById('texto').innerHTML += '<p>Os números são iguais</p>';
    }
}
