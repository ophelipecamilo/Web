function QtsNegativos (vetorNumeros) {
        let contador = 0
        for (let i = 0; i < vetorNumeros.length; i++) {
            if (vetorNumeros[i] < 0) {
                contador++
            } else {}
        }
        console.log(`Temos ${contador} número(s) negativo(s).`)
    }
    
    vetor = [-1, -10, -22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 22]
    QtsNegativos(vetor)