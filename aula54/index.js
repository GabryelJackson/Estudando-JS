// Global 
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Gabryel');
const funcao2 = retornaFuncao('Jackson');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());