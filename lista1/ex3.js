function chefe(){
    var cad1 = prompt("Informe a cadia 1")
    var cad2 = prompt("Informe a cadia 2")

    var resultado = ex3(cad1, cad2)

    console.log(`O resultado é ${resultado}`)
}

//Vamos esprear 2 cadeia de caracteres passadas para parametros 
function ex3(cadeia1, cadeia2) {
    if(cadeia1 == cadeia2) {
        return 0 
    }
    if(cadeia1.length > cadeia2.length) {
        return cadeia1.length + 1
    }
    else {
        // percorre a cadeia1 e cpmpara posição por posição com cadeia2
        for(var i =0; i < cadeia1.length; i++){
            if(cadeia1[i] != cadeia2[i]){ //é diferente
                return i + 1 // retorna a posição e sai da função
            }
        }
    }
}

chefe()