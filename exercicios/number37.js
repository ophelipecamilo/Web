// an = a1 + (n – 1)r PA
// an = a1 . q(n-1) PG

function ProgressaoArtimetica (n, a1, r) {
    let vetorResultado = 0
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
        vetorResultado = (a1 + ((n -1)*r)) 
        return ('Soma: ',vetorResultado)
}

console.log(ProgressaoArtimetica(10, 2, 2))

function ProgressaoGeometrica (n, a1, r) {
    let vetorResultado = 0
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))

        vetorResultado = a1 * (r**(n -1))
        return vetorResultado
}

console.log(ProgressaoGeometrica(10, 2, 2))

