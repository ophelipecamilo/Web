let x = [1, 2, 3, 4, 5, 6, 7]

function MultiplicarVetor(x, y) {
    let vetorMulti = []
    x.forEach(elemento => {
        vetorMulti.push(elemento * y) 
    });
    return vetorMulti
}

function SomarMaior5(x, y) {
    let vetorMulti = []
    x.forEach(elemento => { if (elemento>=5)
        vetorMulti.push(elemento * y) 
    });
    return vetorMulti
}


console.log(MultiplicarVetor(x, 4))
console.log(SomarMaior5(x, 4))