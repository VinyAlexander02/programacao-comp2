const { objectTypeAnnotation } = require("@babel/types")

function chefe() {
    do {
        let vendedor = [] // Alteramos let por let por ser umaletipavel com escopo local
        let vendas = []
        let opcao = Number(prompt(`Escolha: \n [1] - Cadastrar vendedor \n [2] - Cadastrar venda \n [3] - Cdastra Venda funcionários mês \n [4] - Cadastra Venda funcionários \n [5] - Consulta Maior Vendedor [7]- Sair `))
        switch (opcao) {
            case 1: cadastraVenderdor(vendedor) // Escopo golobal
               break
            case 2:cadastraVendas(vendas, vendedor) // è necessário o vetor de vendas e vendedores 
               break
            case 3: consultaVendaFuncionarioMes(vendas)
               break
            case 4: consultaVendaFuncionario (vendas)
               break
            case 5: consultaMaiorVendedor(vendas)
               break
            case 6: fazer
            case 7: console.log(`Saindo....`)
        }
    }
    while (opcao != 3)
}

function cadastraVenderdor(vendor){ // Escopo local - orvendor faz referência a vendedor 
    let objeto = new Object()
    objeto.cod = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    // case 1:erifica se o código existe 
    for(let i = 0; i < vendor.length; i++){
        if(vendor[i].cod == objeto.cod){
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    //insere no vetor
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso!`)
}

function cadastraVenderdor(ven, vendor) { // Ven = vendas e vendor = vendedor 
    let objeto = new Object()
    objeto.codvenda = Number(prompt(`Informe o código da venda`))
    objeto.codvendor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    
    //Verifica se o codigo do vendor existe 
    for(let i = 0; i < vendor.length; i++){
        if (vendor[i].cod == objeto.codvendor){
            for (let j = 0; j < ven.length; j++) { // Verifica d=se já existe uma venda no mês
                if((ven[i].vendedor == objeto.vendedor) && (ven[i].mes == objeto.mes)){
                    console,log(`Venda já cadastrada neste mes para o vendedor!`)
                    return 0 
                }
            }
            // Insere no vetor de vendas
            ven.push(objeto)
            console.log(`Venda Inserida com sucesso!${objeto}`)
            return 0 // Sai da função
        }
    }
    console.log(`Vendedor não existe`)
}

function consultaVendaFuncionarioMes(ven) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    for (let i = 0; i < ven.length; i++) {
        if((ven[i].vendedor == vendedor) && (ven[i].mes == mes)){
            console.log(`Valor da venda ${ven[i].valor}`)
        }
    }
    console.log(`Vendedor e/ou mes não informado`)
}

function consultaVendaFuncionario(ven) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let achou = 0 // Fincionário não encontrado
    for (let i = 0; i < ven.length; i++) {
        if(ven[i].vendedor == vendedor){
            console.log(`Valor da venda ${ven[i].valor} no mês ${ven[i].mes}`)
            achou = 1 //achou
        }
    }
    if(achou == 0) {
        console.log(`Vendedor sem vendas`)
    }
    else{
        console.log(`O total das vendas é ${total}`)
    }
}

function consultaMaiorVendedor(ven) {
    let vendedor = Number(prompt(`Informe o mês da venda`))
    let codVendedor // Código do vendedor que mais vendeu
    let maiorVenda // Maior venda
    for (let i = 0; i < ven.length; i++) {
        if(ven[i].mes == mes){
            if(ven[i].valor > maiorVenda) {
                maiorVenda = ven[i].valor
                codVendedor = ven[i].vendedor
            }
        }
    }
    console.log(`A maior venda é de ${maiorVenda} feita pelo vendedor ${codVendedor}`)
}

