// pessoa -> 123 -> {...} ... permanece no endereço da variável
const pessoa = { pessoa: 'João'}
pessoa.nome = 'Phelipe'
console.log(pessoa.nome)

// pessoa -> 456 -> {...} tentar alterar o endereço da memória não será possível numa constante
//-pessoa = {nome: 'Maria'}
//-console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Pietro'
pessoa.end = 'Rua João Serra'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'Phelipe'
console.log(pessoaConstante.nome)