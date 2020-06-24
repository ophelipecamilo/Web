vetor = [6, 4, 5, 5, 10]

function MediaVetor (numerosVetor) {
    let soma = 0
    let divisor = 0
    for (let i = 0; i < numerosVetor.length; i++) {
        soma += numerosVetor[i] 
        divisor++
}
        return soma / divisor
}

console.log(MediaVetor(vetor))