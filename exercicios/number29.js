function DentroDezVinte (vetorNumeros) {
    let contador = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            contador++
        } else {}
    }
    console.log(`Temos ${contador} números dentro do intervalo.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 22]
DentroDezVinte(vetor)