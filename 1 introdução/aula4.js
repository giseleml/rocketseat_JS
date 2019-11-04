// CONDICIONAIS

function retornaSexo(sexo) {
    if (sexo === 'M') {
        return 'Masculino';
    } else if (sexo === 'F') {
        return 'Feminino';
    } else {
        return 'Outro';
    }
}

var resultado = retornaSexo('M');     // M ou F

/* == verifica se os VALORES são iguais, convertendo tipos se necessário
   === não converte o tipo

1 == '1'            // true, pois o valor contido é igual, mas o tipo é diferente
1 === '1'           // false, verifica se o tipo é igual também
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

*/

// SWITCH
function retornaSexo(sexo) {
    switch(sexo) {
        case M: 
            return 'Masculino';
        case F: 
            return 'Feminino';
        default: 
            return 'Outro';
    }
}