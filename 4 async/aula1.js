// AJAX = requisitar informações do servidor sem precisar atualizar a página

var xhr = new XMLHttpRequest(); //Dá acesso às funcionalidades AJAX

xhr.open('GET', 'https://api.github.com/users/apple'); // método, url
xhr.send(null);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {       // informa que a resposta voltou
        console.log(JSON.parse(xhr.responseText)); // converte o JSON recebido
    }
};

