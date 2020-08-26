function chefe() {
    var num = Number(prompt("Informe um numeros qualquer"))

    var result = ex3(num)

    console.log(`O valor digitado é ${result}`)
}

function ex3(num) {
    if(num > 0) {
        return(`positivo`)

    }else{
        return(`negativo`)
    }
}

chefe()