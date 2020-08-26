function chefe() {
    var raio = Number(prompt("Informe o raio da esfera: "))

    var resultado = ex3(raio)

    console.log(`O volume da esfera é de ${resultado.toFixed(2)}`)
}

function ex3(raio) {
    var V = 4/3 * Math.pow(raio, 3)
    return(V)
}

chefe()