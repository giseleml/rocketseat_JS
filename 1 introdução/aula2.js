// VARIÁVEIS

/* No JS não há TIPAGEM ESTÁTICA, não temos que indicar que é string, float, etc.
Toda variável pode armazenar um valor diferente */

var nome = 'Diego';

nome = 2; // Devido sua TIPAGEM DINÂMICA, atribuir valores de diferentes tipos à mesma variável é permitido em JS.

/* PRINCIPAIS TIPOS :

String - 'Hello World'
Inteiro = 23
Float = 0.23
Boolean = True/False
Array/Vetor = ['Nome', 'Idade']
Objetos = var aluno = {
    nome: 'Gisele',
    idade: 22,
    humano: true    ---> Propriedades do Objeto
}
*/

//Como acessar Array

var caixa = ['Óculos', 'Remédio', 'Celular'];
caixa[2] // Celular, pois começa com index 0

//Como acessar Objeto
aluno.nome //Gisele
