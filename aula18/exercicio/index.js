const pessoas = ['Gui', 'Zézinho', 'Luizinho'];
pessoas.push('Robocop Gay'); // Adicionando no final!
pessoas.unshift('Iron Man'); // Adicionando no Início!

const removido = pessoas.pop(); // Removido do final!
const removerDoComeco = pessoas.shift(); // Removido do Início!

delete pessoas[1]
console.log(pessoas, removido, removerDoComeco);
pessoas[1] = 'Zézinho';
console.log(pessoas.slice(0, 3));