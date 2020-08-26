function chefe() {
    var num = Number(prompt("Informe um número: "))

    var result = ex8(num)

    console.log(`O fatorial de ${num} é ${result}`)
}

var fat = []
function ex8(n) {
    if (n == 0 || n == 1) {
        return 1
    }

    if (fat[n] > 0) {
        return fat[n]
    }

    return fat[n] = ex8s(n - 1) * n
} ​

chefe()
