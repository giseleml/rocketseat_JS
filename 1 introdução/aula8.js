// INTERVALO E TIMEOUT

//Um intervalo em JS é uma função que executa várias vezes dentro de um intervalo.

function exibeAlgo() {
    console.log('Hello world;')
}

setInterval(exibeAlgo, 1000); // Nome da função, tempo de execução

/*
exibeAlgo   -> referencia a função
exibeAlgo() -> executa a função
*/

//Um timeout não executa o script várias vezes, apenas uma com um delay antes de executar a função.

function exibeAlgo() {
    console.log('Hello world;')
}

setTimeout(exibeAlgo, 5000); // Será executada após 5 segundos

