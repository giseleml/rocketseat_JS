// CRIANDO ELEMENTOS ATRAVÉS DO JS

var linkElement = document.createElement('a'); //O parâmetro é a tag do elemento à ser criada, no caso, um link

linkElement.href = 'google.com';
// ou
linkElement.setAttribute('href', 'https://www.google.com/');

var textElement = document.createTextNode('Acessar site google');

linkElement.appendChild(textElement); // Adiciona o text como filho do elemento link

// Visualização do elemento criado: <a href="https://www.google.com/">Acessar site google</a>

