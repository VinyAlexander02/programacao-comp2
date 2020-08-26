// Variável com escopo local 
function chefe() {
    var num = Number(prompt("Informe o número"))

    var resultado = ex1(num)

    console.log(`A soma do número é ${resultado}`)
}

function ex1(n) {
    var soma = 0

    for(var i = 1; i <= num; i++){
        soma = soma + i
    }
    return(soma)
}


chefe()