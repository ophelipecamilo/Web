const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: '325i',
    valor: 127000,
    proprietario: {
        nome: 'Phelipe',
        idade: 23,
        endereco: {
            logradouro: 'Rua João Serra',
            numero: 796
        }
    },
    condutores: [{
        nome: 'Camilo',
        idade: 50
    }, {
        nome: 'João',
        idade: 31
    }],
    calculaValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro

console.log(carro)