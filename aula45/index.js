function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(3, 5));
    console.log(soma('3', 5));
} catch(erro) {
    // console.log(erro);
    console.log('Alguma coisa mais amigável para o usuário no Frontend');
}


