let varA = 'A'  // B
let varB = 'B' // C
let varC = 'C' // A
let varD = 'A'

varA = varB // varA = B
varB = varC // varB = C
varC = varD // varC = A

console.log(varA, varB, varC)