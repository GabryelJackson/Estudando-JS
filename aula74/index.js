const produto = {
    nome: 'Produto',
    preco: 1.8,
    material: 'porcelana'
}
console.log(Object.entries(produto));
for(let entry of Object.entries(produto)) {
    console.log(entry);
}
