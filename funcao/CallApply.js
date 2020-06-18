function GetPreco(Imposto = 0.2, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + Imposto)}`
}

const Produto = {
    nome: 'Notebook',
    preco: 3599,
    desc: 0.15,
    GetPreco
}

global.preco = 20 
global.desc = 0.1
console.log(GetPreco())
console.log(Produto.GetPreco())

const mt03 = { preco: 23900, desc: 0.2}

console.log(GetPreco.call(mt03))
console.log(GetPreco.apply(mt03))

console.log(GetPreco.call(mt03, 17000, 0.15))
console.log(GetPreco.apply(global, [12000, 0.3]))
