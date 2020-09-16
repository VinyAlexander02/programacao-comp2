function chefe() {
    //Criar Matriz - 3x4 - 3 aluno e 4 notas cada 
    let matriz = []
    let vetor = []
    cadastra(matriz,vetor)
    calculaMedia(matriz, vetor)
    calculaMaiorNotaProva(matriz, vetor)
    calculaMenorNotaAluno(matriz, vetor)
}

function cadastra(mat, vet) {
    for(let i = 0; i < 3; i++){
        
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Infome o código do aluno`))
        obj.media = 0
        //Insere o aluno no vetor 
        vet.push(obj) 
        alert(`Informe 4 notas para o aluno ${1+i}`)
        // criamos um vetor dentro da matriz
        mat[i] = []
        for(let j = 0; j < 4; j++){ // 4 Notas
            mat[i][j] = Number(prompt(`Nota ${j+1}`))
        } 
    } 
}

function calculaMedia(mat, vet) {
    // Usando um vetor auxiliar
    for(let i = 0; i < 3; i++){ // 3 Alunos 
        for(let j = 0; j < 4; j++){ // 4 Notas
            vet[i].media = vet[i].media + mat[i][j]
        } 
        vet[i].media = vet[i].media / 4
    } 
    console.log(vet)
}

function calculaMaiorNotaProva(mat, vet) {
    for(let j=0; j < 4; j++) {// para cada prova
        let maiornota = mat[0][j]
        let maiornome = vet[0].nome // Assumimos que o primeiro aluno tem a mior nota 
        for(let i=0; i < 3; i++){ //
            if (mat[i][j] > maiornota){
                maiornota = mat[i][j]
                maiornome = vet[i].nome
            }
        }
        console.log(`Aluno com a maior nota na prova ${j} foi ${maiornome} com nota ${maiornota}`)
    }
}

function calculaMenorNotaAluno(mat, vet) {
    for(let i = 0; i < 3; i++){
        let menorNota = mat[i][0]
        for(let j = 0; j < 4; j++) {
            if(met[i][j] < menorNota){
                menorNota = mat[i][j]
            }
        }
        console.log(`O Aluno ${vet[i].nome} tem menor nota ${menorNota}`)
    }
}

chefe()