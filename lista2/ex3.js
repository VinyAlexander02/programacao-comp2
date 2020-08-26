chefe() 

function chefe() {
    var vetor = [] // Escopo global - Iremos passar nos parâmetros da função

    do {
        var opcao = Number(prompt("Digite [1]. Req1 \n [2]. Req2 \n [3]. Req3 \n [4]. Req4 \n [5]. Req5 \n [6]. Req6"))
        switch(opcao) {
            case 1: requisito1(vetor)
                 break
            case 2: requisito2(vetor)
                 break
            case 3: requisito3(vetor)
                 break
            case 4: requisito4(vetor)
                 break
            case 5: requisito5(vetor)
                 break
            case 6: console.log("Programa vai ser encerrado!")
                 break
            default: console.log("Opção inváilida")
        }
    }
    while(opcao != 6)
    
}

function requisito1(vet) { // Vet aponta para o Vetor 
    var objeto = new Object()
    objeto.sexo = prompt(`Informe o sexo M ou F`).toUpperCase
    objeto.altura = Number(prompt("Informe a altura"))
    objeto.idade = Number(prompt("Informe a idade"))
    objeto.olhos = prompt("Informe a cor dos olhos A - Azul, V - verde e C - Castanho").toUpperCase
    //Inserindo no vetor
    vet.push(objeto)
    console.log(`Habitante cadastrado com sucesso!`)
}

function requisito2(vet) { // Vet aponta para o Vetor 
    var soma = 0
    var qtde = 0
    for (var i = 0; i < vet.length; i++) {
        if((vet[i].olhos == "C") && (altura > 1.60)) {
            soma = soma + vet[i].idade
            qtde++
        }
    }
    if (qtde != 0){
        console.log(`A média de idades é ${soma / qtde}`)

    }else {
        console.log(`Não existe habitante nesse calcúlo`)
    }
    
}

function requisito3(vet) {

}

function requisito4(vet) {

}

function requisito5(vet) {

}