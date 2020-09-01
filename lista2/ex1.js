const { objectTypeAnnotation } = require("@babel/types")

function chefe() {
    do {
        var vendedor = []
        var vendas = []
        var opcao = Number(prompt(`[1] - Cadastrar vendedor \n [2] - Cadastrar venda \n [3] - Sair `))
        switch (opcao) {
            case 1: cadastraVenderdor(vendedor) // Escopo golobal
               break
            case 2:cadastraVendas(vendas, vendedor) // è necessário o vetor de vendas e vendedores 
               break
            case 3:
        }
    }
    while (opcao != 3)
}

function cadastraVenderdor(vend){ // Escopo local - vend faz referência a vendedor 
    var objeto = new Object()
    objeto.cod = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    // case 1:erifica se o código existe 
    for(var i = 0; i < vend.length; i++){
        if(vend[i].cod == objeto.cod){
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    //insere no vetor
    vend.push(objeto)
    console.log(`Vendedor cadastrado com sucesso!`)
}

function cadastraVenderdor(ven, vendor) { // Ven = vendas e vendor = vendedor 
    var objeto = new Object()
    objeto.codvenda = Number(prompt(`Informe o código da venda`))
    objeto.codvendor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    
    //Verifica se o codigo do vendor existe 
    for(var i = 0; i < vendor.length; i++){
        if (vendor[i].cod == objeto.codvendor){
            for (var j = 0; j < ven.length; j++) { // Verifica d=se já existe uma venda no mês
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