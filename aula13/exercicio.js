let varA = 'a';
let varB = 'b';
let varC = 'c';
let varD = 'd';

varD = varA; // A
varA = varB; // B
varB = varC; // C
varC = varD; // A

console.log(varA, varB, varC);