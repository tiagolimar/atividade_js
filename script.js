let id = 1

function criarTarefa(event) {
    event.preventDefault();

    if(event.target.id != 'remover'){
        const descricao = document.getElementById('descricao').value
        const tarefas = document.getElementById('tarefas')
    
        const tarefaHTML = `
        <div id="${id}" class="form-check">
            <input class="form-check-input" type="checkbox" name="tarefas" id="${id}-input">
            <label class="form-check-label" for="${id}-input">${id} - ${descricao}</label>
        </div>
        `;
    
        tarefas.innerHTML += tarefaHTML
    
        id++;
    }
}

function removerTarefa(event) {
    event.preventDefault()
    const id = prompt('Informe o ID da tarefa')

    const element = document.getElementById(id);

    if(element){
        element.remove();
    }
}