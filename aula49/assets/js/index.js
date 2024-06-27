const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

btnAddTarefa.addEventListener('click', function() {
    if(inputNovaTarefa.value === '') {
        alert('Lembre-se de adicionar uma tarefa');
    } else {
        criaTarefa(inputNovaTarefa.value);
    }
});

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(inputNovaTarefa.value === '') {
            alert('Lembre-se de adicionar uma tarefa');
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

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    li.appendChild(botaoApagar);
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'btnApagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    botaoApagar.addEventListener('click', function(e) {
        const el = e.target;
        console.log(el.parentElement);
        if(el.classList.contains('btnApagar')) {
            el.parentElement.remove();
            salvarTarefa();
        }
    });
}

function salvarTarefa() {
    const todasAsTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of todasAsTarefas) {
        let textoDaTarefa = tarefa.innerText;
        textoDaTarefa = textoDaTarefa.replace('Apagar', '').trim();
        listaDeTarefas.push(textoDaTarefa);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function criaTarefa(textoDoInput) {
    const li = criaLi();
    li.innerHTML = textoDoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}