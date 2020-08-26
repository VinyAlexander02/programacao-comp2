function chefe() {
    ex7()
}

// Função testada 
function ex7() {

    var soma = 0
    var conta = 0
    var num = Number(prompt("Informe um número"))
    do {
        conta++ // soma1
        soma = soma + num // acumulador 

        num = Number(prompt("Informe outro número ou Digite negativo para finalizar"))
    }
    while(num >= 0)

    console.log(`A média dos números é ${soma / conta}`)
}

chefe()