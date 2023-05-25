/* 
    Operadores Lógicos
    && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU
    ! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true;
const expressaoOr = true || false || false;
console.log(expressaoAnd, expressaoOr);

const usuario = 'Luiz';
const senha = '123456';
//                       True                False
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar)

console.log(!true)