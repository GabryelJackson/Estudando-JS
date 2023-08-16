// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Sacramento';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
   }

   function falaNome() {
    console.log(criaNome('Gabryel'));
   }

   falaNome();
   console.log(idade, peso, altura);

})(30, 80, 1.80);

