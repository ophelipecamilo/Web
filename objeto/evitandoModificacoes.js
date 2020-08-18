// Object.preventExtension - bloquear novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.88, tag: 'promoção'
})
console.log(`Extensível: ${Object.isExtensible(produto)}`)

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca 1.5x1.5'
delete produto.tag
console.log(produto)

// Object.seal - congelar atributos sem excluir, modificando valores

const pessoa = { nome:'Phelipe', idade: 24}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Camilo'
delete pessoa.nome
pessoa.idade = 20

console.log(pessoa)

// Object.freeze - congelar atributos sem modificacao do valor