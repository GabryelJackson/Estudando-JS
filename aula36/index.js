const elementos = [
    {tag: 'p', texto: 'Lorem ipsum dolor, sit amet.'}, // 0
    {tag: 'div', texto: 'consectetur adipisicing elit. Ad sunt.'}, // 1
    {tag: 'section', texto: 'velit aspernatur, non reprehenderit tenetur.'}, // 2
    {tag: 'footer', texto: 'pariatur dolorem illo ea, repellendus.'} // 3 
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    console.log(tag)
}

container.appendChild(div);