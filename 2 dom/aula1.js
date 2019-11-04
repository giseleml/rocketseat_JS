//EVENTO INLINE

/*A DOM é a árvore de elementos dentro do HTML (div, botões, etc.) 
Todos os elementos visualmente dispostos na tela. */

//Os eventos podem ser utilizados em qualquer elemento html.

function mostraAlerta() {
    alert('O botão foi clicado');
}

<html>
    <div id="app">
        <button onclick="mostraAlerta()">Clique Aqui</button>
        <button onmouseover="mostraAlerta()">Clique Aqui</button>
    </div>
</html>