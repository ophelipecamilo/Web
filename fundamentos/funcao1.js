// Função sem retorno
function imprimirSomas(a, b) {
    console.log(a+b)
}

imprimirSomas(2, 3)
imprimirSomas(2)
imprimirSomas(2, 3, 4, 5, 6, 7)
imprimirSomas()
imprimirSomas("Phelipe", "Camilo")

// Função com retorno
function soma (a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
console.log(soma("Phelipe", "Camilo"))