function chefe() {
    var altura = Number(prompt("Informe a altura :"))
    var sexo = prompt("Informe o sexo (m ou f): ")

    var resposta = ex3(altura, sexo)

    console.log(`O peso ideal para essa pessoa é de ${resposta.toFixed(3)}Kg`)
}

function ex3(altura, sexo) {
    var idealhomem = 72.7 * altura - 58
    var idealmulher = 62.1 * altura - 44.7

    if (sexo == 'm') {
        return(idealhomem)

    }else {
        return(idealmulher) 
    }
}

chefe()