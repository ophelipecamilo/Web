let vetorAdicionar = [6, 7, 8, 9, 10]

function ContemPilha (VetorPilha) {
    let x = [1, 2, 3, 4, 5]
    for (let i = 0; i < VetorPilha.length; i++) {
        x.push(vetorAdicionar[i])
    }
    return x
}

console.log(ContemPilha(vetorAdicionar))