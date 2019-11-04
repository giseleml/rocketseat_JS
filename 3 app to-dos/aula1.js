var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')


//LISTA DEFAULT DE TODOS
var todos = ['Estudar JavaScript', 'Pagar contas', 'Estudar para prova'];

// CRIA E RENDERIZA A LISTA DE TODOS
function renderTodos() {
    listElement.innerHTML = '';

    // para cada item do array todos
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a'); 
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo); // Armazena o index do todo
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); // cada todo chamará o deleteTodo com seu index pos

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText); // Armazena cada todoText num todoElement
        todoElement.appendChild(linkElement); // Cria o elemento link com seu texto
        listElement.appendChild(todoElement); // Armazena cada todoElement no listElement
    }
}

renderTodos();

// ADICIONA NOVOS TODOS
function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText); // novo item no fim da array todos
    inputElement.value = '';
    renderTodos();
}

btnElement.onclick = addTodo;

//EXCLUI TODOS
function deleteTodo(pos) {
    todos.splice(pos, 1); //remove exatamente esse item da posição pos
    renderTodos();
}