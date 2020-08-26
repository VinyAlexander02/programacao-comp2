function chefe() {

    //Vetor com escopo global -> vamos passalo como parametros nas funções 
    var vetor = []

    do {
        var opcao = Number(prompt(`Escolha \n [1] - Cadastrar \n [2]- Media salario \n [3] - Menor e maior idade \n [4]-Qtde Mulheres \n [5]- sair`))
        switch (opcao) {
            case 1: entradadedados(vetor)
                break
            case 2: mediaSalario(vetor)
                break
            case 3: MaiorMenoridade(vetor)
                break
            case 4: qtdeMulheres(vetor)
                break
            case 5: console.log(`Obrigado por utilizar o nosso programa`)
                break
            default: console.log(`Opção Inválida`)
        }
    }
    while (opcao != 5)
}

function entradadedados(vet) {
    console.log(`Entrou na Função entarada`)
    var dados = new Object()
    dados.salario = Number(prompt("Informe o salário: "))
    dados.filhos = Number(prompt("Informe a quantidade de filhos: "))
    dados.sexo = prompt("Informe o sexo (m ou f): ").toUpperCase()
    dados.idade = Number(prompt("Informe a idade: "))
    vet.push(dados)
}

function mediaSalario(vet) {
    if(vet == []){
        console.log("Nenhum Habitante Cadastrado")

    }else{
        var soma = 0
        for(var i = 0; i < vet.length; i++) { //Percorre o vetor
            soma = soma + vet[i].salario // acumula
        }
        console.log(`A média salarial é de R$${soma / vet.length}`)
    }
}

function MaiorMenoridade(vet) {
    if(vet == []) {
        console.log("Nenhuma Idade Cadastrado")

    }else {
        var menorIdade = vet[0].idade // A idade do primeiro habitante é a menor 
        var maiorIdade = vet[0].idade // A idade do primeiro habitante é a maior
        for(var i = 1; i < vet.length; i++) {
            if(vet[i].idade > maiorIdade) {
                maiorIdade = vet[i].idade
            }
            if(vet[i].idade < menorIdade) {
                menorIdade = vet[i].idade
            }
        }
        console.log(`Maior Idade: ${maiorIdade} Menor Idade: ${menorIdade}`)
    }
}

function qtdeMulheres(vet) {
    if(vet ==[]){
        console.log("Nenhuma Mulher cadastrada")

    }else{
        var quantidade = 0
        for(var i = 0; i < vet.length; i++){
            if ((vet.sexo == 'F') && (vet.salario <= 500) && (vet.filhos >= 3)){
                quantidade++
            }
        }
        console.log(`A quantidade de mulheres é de ${quantidade} mulheres`)
    }
}

chefe()
