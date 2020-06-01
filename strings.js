const escola = "Cod3r"

console.log(escola.charAt(4)) // Retornar o caracter do indice informado
console.log(escola.charAt(5)) // Indice inexistente não causará erro
console.log(escola.charCodeAt(3)) // Código indexado do unicode do caracter escolhido
console.log(escola.indexOf('3')) // Qual índice do caracter informado

console.log(escola.substring(1)) // Retornar a string a partir do indice informado
console.log(escola.substring(0, 3)) // Retornar a string a prtir do indice informado e quantidade de caracteres

console.log('Escola '.concat(escola).concat("!")) // Concaternar com concat
console.log('Escola ' + escola + "!") // Concatenar com +
console.log(escola.replace(3, 'e')) // substituir elementos da string

console.log('Ana,Maria,Pedro'.split(',')) // transformar em array e separar por elemento