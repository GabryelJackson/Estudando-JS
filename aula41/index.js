const fruits = ['Abacate', 'Banana', 'Cacau', 'Damasco', 'Embaúba', 'Figo', 'Goiaba', 'Hilocéreo', 'Ingá'];

// Continue - Continua para a próxima interação;
// Break - Sai do laço;

do {
    for(fruit in fruits) {
        if(fruits[fruit] === 'Banana') {
            console.log('Pulei a Banana');
            fruit++;
            continue;
        }

        if(fruits[fruit] === 'Goiaba') {
            console.log('Goiaba encontrada, saindo...');
            fruit++;
            break;
        }
        console.log(fruits[fruit]);
    }
} while (fruits < fruits.length);