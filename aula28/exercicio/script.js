function meuEscopo() {
    const form = document.querySelector('#form');
    let resultado = document.querySelector('#resultado');
    
    function clicarNoBotao(evento) {
        evento.preventDefault();
        const inputNome = form.querySelector('#nome').value;
        const inputPontos = form.querySelector('#pontos').value;

        console.log(typeof inputNome, typeof inputPontos);

        const result = inputPontos >= 100 ? 'Usuário VIP' : 'Usuário normal';

        resultado.innerHTML = `<p>${inputNome}, você tem ${inputPontos} pontos e é um ${result}.</p>`
    }
    form.addEventListener('submit', clicarNoBotao);
}
meuEscopo();
