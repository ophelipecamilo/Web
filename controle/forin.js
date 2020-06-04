const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Phelipe',
    sobrenome: 'Camilo',
    idade: 23,
    peso: 67

}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}