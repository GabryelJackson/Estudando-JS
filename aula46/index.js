// try {
//     // Executada quando não há erros
//     console.log(a);
//     console.log('Abri um arquivo!');
//     console.log('Manipulei o arquivo!');
//     console.log('Fechei o arquivo!');
// } catch(e) {
//     // Quando há erros
//     console.log('Tratando o erro!');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if(!(data instanceof Date)) {
        data = new Date();
    }

    // if(!data) {
    //     data = new Date();
    // }

    return data.toLocaleTimeString('pt-BR', {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
const hora = retornaHora(11);
console.log(hora);
// try {
//     const data = new Date('01-01-1970 12:58:12');
//     const hora = retornaHora();
//     console.log(hora);
// } catch (e) {
//     // Tratar erro
//     console.log(e);
// } finally {
//     console.log('Tenha um bom dia!');
// }
