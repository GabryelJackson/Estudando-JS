const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(inputNovaTarefa.value === '') {
            alert('Lembre-se de adicionar uma tarefa!');
        } else {
            criaTarefa(inputNovaTarefa.value);
        }
    }
});

btnAddTarefa.addEventListener('click', function() {
    if(inputNovaTarefa.value === '') {
        alert('Lembre-se de adicionar uma tarefa!');
    } else {
        criaTarefa(inputNovaTarefa.value);
    }
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaTarefa() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criabotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'btnApagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    botaoApagar.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('btnApagar')) {
            el.parentElement.remove();
            salvarTarefa();
        }
    });
}

function salvarTarefa() {
    const todasAsTarefas = tarefas.querySelectorAll('li');
    const listaDasTarefas = [];
    for(let tarefas of todasAsTarefas) {
        let textoDaTarefa = tarefas.innerText;
        textoDaTarefa = textoDaTarefa.replace('Apagar', '').trim();
        console.log(textoDaTarefa);
        listaDasTarefas.push(textoDaTarefa);
    }
    console.log(listaDasTarefas);
    const tarefasJSON = JSON.stringify(listaDasTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefasSalvas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefasSalvas) {
        criaTarefa(tarefa);
    }
}

function criaTarefa(textoDoInput) {
    const li = criaLi();
    li.innerHTML = textoDoInput;
    tarefas.appendChild(li);
    limpaTarefa();
    criabotaoApagar(li);
    salvarTarefa();
}

adicionaTarefasSalvas();
