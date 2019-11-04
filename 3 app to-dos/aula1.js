var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')


//LISTA DEFAULT DE TODOS
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; /* Transforma o JSON de volta em array
e caso não haja nada no localStorage, retorna um array vazio. */

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
    saveToStorage();
}

btnElement.onclick = addTodo;

//EXCLUI TODOS
function deleteTodo(pos) {
    todos.splice(pos, 1); //remove exatamente esse item da posição pos
    renderTodos();
    saveToStorage();
}

//STORAGE - To-Dos estarão salvos mesmo renderizarando a página do navegador
//Devido sua simplicidade e não poder gravar arrays, por exemplo, convertemos todos em JSON (Objeto de JS em string)

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); 

}