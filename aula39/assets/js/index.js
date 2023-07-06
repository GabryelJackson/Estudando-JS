const paragrafos = document.querySelector('.paragrafos');
console.log(paragrafos);
const ps = paragrafos.querySelectorAll('p');
console.log(ps);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const corDaCaixa = '#e0daa3';

console.log(backgroundColorBody);

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = corDaCaixa;
    // console.log(p);
}