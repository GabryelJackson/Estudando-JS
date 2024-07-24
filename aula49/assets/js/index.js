const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

btnAddTarefa.addEventListener('click', function() {
    if(inputNovaTarefa.value === '') {
        alert('Lembre-se de adicionar uma tarefa!');
    } else {
        criaTarefa(inputNovaTarefa.value);
    }
});

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(inputNovaTarefa.value === '') {
            alert('Lembre-se de adicionar uma tarefa!');
        } else {
            criaTarefa(inputNovaTarefa.value);
        }
    }
});

function criaTarefa(textoDoInput) {
    const li = criaLi();
    li.innerHTML = textoDoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'btnApagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    li.appendChild(botaoApagar);
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
    const listaDeTarefas = [];
    for(let tarefas of todasAsTarefas) {
        let textoDaTarefa = tarefas.innerText;
        textoDaTarefa = textoDaTarefa.replace('Apagar', '').trim();
        listaDeTarefas.push(textoDaTarefa);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(listaDeTarefas);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listasDeTarefasSalvas = JSON.parse(tarefas);
    for(let tarefa of listasDeTarefasSalvas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();