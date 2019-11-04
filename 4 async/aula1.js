// AJAX = requisitar informações do servidor sem precisar atualizar a página

var xhr = new XMLHttpRequest(); //Dá acesso às funcionalidades AJAX

xhr.open('GET', 'https://api.github.com/users/apple'); // método, url
xhr.send(null);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {       // informa que a resposta voltou
        console.log(JSON.parse(xhr.responseText)); // converte o JSON recebido
    }
};



// PROMISES
// Promise é uma classe, response e reject são funções.
// Response é utilizada quando o resultado obtido teve sucesso
// Reject é utilizada quando o resultado obtido não foi de sucesso

var minhaPromise = function() {
    return new Promise(function (res, rej) {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://api.github.com/users/microsoft');
        xhr2.send(null);

        xhr2.onreadystatechange = function() {
            if (xhr2.readyState === 4) {
                if (xhr2.status === 200)  { //Verifica o sucesso do GET
                    res(JSON.parse(xhr2.responseText));    
                 } else {
                    rej('Erro na requisição!')
                 }   
            }
        }
    })
}

// Tudo o que precisa de uma resposta que virá em x momento, deve ser colocado abaixo,
// dentro da promise.
minhaPromise()
.then(function(res) {
    //Se deu código de sucesso a promise chama o resolve, que invoca o then
    console.log('A resposta da promise foi ', res);
})
.catch(function(err) {
    //Se der errado, o reject chama o catch
    console.warn(err);
})