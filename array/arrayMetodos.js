const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo valor do array
console.log(pilotos)

pilotos.push('Veerstappen') // Inclui no array
console.log(pilotos)

pilotos.shift() // Remove o primeiro valor do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Inclui no inicio do array 
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) // Remover o item a partir do indice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // noo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)