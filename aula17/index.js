let numero = Number(prompt('Digite um número'));
let numeroTitulo = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')
let raizQuadrada = document.getElementById('raiz-quadrada')

numeroTitulo.innerHTML = numero
raizQuadrada.innerHTML += `<strong>${numero ** 0.5}</strong>`
texto.innerHTML += `<p><strong>${numero}</strong> é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p> É NaN? <strong>${isNaN(numero)}</strong></p>`
texto.innerHTML += `<p> Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p> Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p> Com duas casas decimais <strong>${numero.toFixed(2)}</strong></p>`