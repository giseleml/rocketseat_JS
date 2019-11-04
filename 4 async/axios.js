//No axios ele já entende que a responsa é um JSON e já retorna um objeto JS.
//Por baixo dos panos ele também está usando XMLHttpRequest, com uma sintax mais clara

axios.get('https://api.github.com/users/ibm')
.then(function(res) {
    //Se deu código de sucesso a promise chama o resolve, que invoca o then
    console.log('A resposta da promise foi ', res);
})
.catch(function(err) {
    //Se der errado, o reject chama o catch
    console.warn(err);
})
