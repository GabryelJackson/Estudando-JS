const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

btnAddTarefa.addEventListener('click', function() {
    if(inputNovaTarefa.value === '') {
        alert('Lembre-se de adicionar uma tarefa.');
    } else {
        criaTarefa(inputNovaTarefa.value);
    }
});

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(inputNovaTarefa.value === '') {
            alert('Lembre-se de adicionar uma tarefa.');
        } else {
            criaTarefa(inputNovaTarefa.value);
        }
    }
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function botaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'botaoApagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    botaoApagar.addEventListener('click', function(e) {
        const el = e.target;
        console.log(el.parentElement);
        if(el.classList.contains('botaoApagar')) {
            el.parentElement.remove();
        }
    });
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
        console.log(listaDeTarefas)
    }
}

function criaTarefa(textoDoInput) {
    const li = criaLi();
    li.innerHTML = textoDoInput;
    tarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
    salvarTarefas();
}
