

function Lanchonete (cd, qt) {
    switch (cd) {
        case 100:
            return (`Cachorro-quente: ${qt*3}`)
        case 200:
            return (`Hambúrguer Simples : ${qt*4}`)
        case 300:
            return (`Cheaseburguer : ${qt*5.5}`)
        case 400:
            return (`Bauru : ${qt*7.5}`)
        case 500:
            return (`Refrigerante : ${qt*3.5}`)
        case 600:
            return (`Suco: ${qt*2.8}`)
        default:
            return 'Código inválido'
    }
}

console.log(Lanchonete(100, 3))
console.log(Lanchonete(200, 2))
console.log(Lanchonete(300, 1))
console.log(Lanchonete(400, 2))
console.log(Lanchonete(500, 3))
console.log(Lanchonete(600, 4))
console.log(Lanchonete(1233, 4))