// nào aceita repetição/ não indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Fluminense').add('Botafogo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Phelipe', 'Fernando', 'Maria', 'Maria']
const nomesSet = new Set(nomes)
console.log(nomesSet)