const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

btnAddTarefa.addEventListener('click', function() {
    if(inputNovaTarefa.value === '') {
        alert('Lembre-se de adicionar uma tarefa.');
    } else {
        criaTarefa(inputNovaTarefa.value);
    }
});

function criaTarefa(textoDoInput) {
    const li = criaLi();
    li.innerHTML = textoDoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(inputNovaTarefa.value === '') {
            alert('Lembre-se de adicionar uma tarefa.');
        } else {
            criaTarefa(inputNovaTarefa.value);
        }
    }
});

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
    botaoApagar.addEventListener('click', function(e) {
        const el = e.target;
        console.log(el.parentElement);

        if(el.classList.contains('apagar')) {
            el.parentElement.remove();
        }
    });
}

