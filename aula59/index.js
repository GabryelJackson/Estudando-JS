// Função Construtora -> Objetos
// Função Fábrica -> Objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ' Sou um método');
    }
}
const p1 = new Pessoa('Gabryel', 'Jackson');
const p2 = new Pessoa('Cláudia', 'Carvalho');
console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
p1.metodo();

// Pessoa.nome = nome