function geral() {
    const formulario = document.querySelector('.formulario');
    const listaDePokemons = [];
    const resultado = document.querySelector('.resultado');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const nome = formulario.querySelector('.nome').value;
        const tipo = formulario.querySelector('.tipo').value;
        const peso = formulario.querySelector('.peso').value;
        const altura = formulario.querySelector('.altura').value;

        const dados = {
            nome,
            tipo,
            peso,
            altura
        };

        listaDePokemons.push(dados);
        console.log(listaDePokemons)

        resultado.innerHTML += `<p>O Pokemon ${dados.nome} do tipo ${dados.tipo} pesa ${dados.peso} e têm ${dados.altura} de altura.</p>`
    });
};

geral();