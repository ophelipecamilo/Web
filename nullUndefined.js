let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // Evitar atribuir undefined
console.log(!!produto.preço)
// delete produto.preço // Para deletar o atributo do objeto
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço)
console.log(produto)