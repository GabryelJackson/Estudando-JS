const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const background = styleBody.backgroundColor;
console.log(background);

for(let p of ps) {
    p.style.backgroundColor = background;
    p.style.color = '#e0daa3';
}
