function chefe() {
    let matriz = [] //pts dos times em cada jogo
    let vetor = [] // Os times 
    cadastra(vetor, matriz)
    media(vetor, matriz)
    timeMaiorPontosRodada(vetor, matriz)
}

function cadastra(mat, vet) {
    for (let i = 0; i < 4; i++) {
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do time de Basquete: `)
        obj.cidade = prompt(`Informe a cidade Natal do time:`)
        obj.media = 0
        vet.push(obj)
        // Insere os pts
        mat[i] = []
        for (let j = 0; j < 3; j++) {
            mat[i][j] = Number(prompt(`Quantos pontos na ${j + 1}° rodada `))
        }
    }
}

function media(mat, vet) {
    for (let i = 0; i < 4; i++) { // Para cada time
        for (let j = 0; j < 3; j++) { // Para cada rodada 
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}

function timeMaiorPontosRodada(mat, vet) {
    for (let j = 0; j < 3; j++) {
        let maiorpont = mat[0][j]
        let nomeMaiorpont = vet[0].nome
        for (let i = 0; i < 4; i++) {
            if (met[i][j] > maiorpont) {
                maiorpont = mat[i][j]
                nomeMaiorpont = vet[i].nome
            }
        }
        console.log(`Na rodada ${j+1} o time ${nomeMaiorpont} fez ${maiorpont}`)
    }
}

chefe()

// git serve para criar um histórico para arquivos 
// Jogamos ele para a sala de espera usando  "git add ."
// git commit -> cria diferentes versões para o arquivo

// Git é um local onde se armazena os comados dados pelo git