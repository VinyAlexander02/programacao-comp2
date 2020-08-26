function ex9(num) {
    var soma = 0
    for (var i = num; i >= 1; i++) {
        if (num % i == 0) {
            soma = soma + i
        }
    }
    console.log(`soma dos divisores é ${soma}`)
}