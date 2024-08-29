// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Sacramento';
    function falaNome() {
        console.log(criaNome('Gabryel'));
    }

    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
   }

   falaNome();
   console.log(idade, peso, altura);

})(30, 80, 1.80);

