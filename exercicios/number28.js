function QtsParImpar (vetorNumeros) {
    let qtspar = 0
    let qtsimpar = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtspar++
        } else {
            qtsimpar++
        }
    }
    console.log(`Temos ${qtspar} números pares e ${qtsimpar} números impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
QtsParImpar(vetor)