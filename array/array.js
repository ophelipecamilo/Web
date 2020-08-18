console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2]) // ultimo valor no indice
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Phelipe')
console.log(aprovados.length)

aprovados[9] = 'Fernando'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Organizar por ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // primeiro parametro é o indice, segundo quantidade a exlcuir a partir do indice, depois elementos a adicionar.
console.log(aprovados)
