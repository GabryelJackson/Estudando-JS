const numero = prompt('Digite um número: ');
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada do seu número é: <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p>Não é um número? ${isNaN(numero)}</p>`
texto.innerHTML += `Seu número vezes 2 é: ${numero*2}`