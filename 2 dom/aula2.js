// TRABALHANDO COM A DOM

//Referenciando elementos HTML em JS

<html>
    <input type="text" name="nome" id="nome"></input>
    <button class="botão">Adicionar</button>
</html>

var inputElement = document.getElementById('nome'); // Busca elemento por id

var inputElements = document.getElementsByTagName('input'); // Sempre retorna um vetor de inputs HTMLCollection
// (...)document.getElementsByTagName('input')[0]; // Retorna somente o primeiro input

var buttonElement = document.getElementsByClassName('button'); // Sempre retorna um vetor 

/* (...)document.querySelector('body div#app input'); Percorre a DOM, procurando pelo input dentro
do div app, que está dentro do body. Retorna um ÚNICO elemento, há não ser que se use
querySelectorAll() */

buttonElement.onclick = function () {
    alert('Botão clicado;')
}
