let numeros = [1, 2, 3, 4]
let strings = ['A', 'B', 'C', 'D']
let decimais = [1.1, 2.2, 3.3, 4.4]

function Concatenar(... args) {
    let vetorUnico = []
    for (let i = 0; i < arguments.length; i++) {
        vetorUnico = vetorUnico.concat(arguments[i])
    }
    return vetorUnico
}

console.log(Concatenar(numeros, strings))
console.log(Concatenar(decimais, strings))