const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1[`desconto Legal:`] = 0.40 // Evitar nomes com espaços

console.log(prod1)

const prod2 = {

    nome: 'Camisa Polo',
    preco: 79.,
    obj: {
        blahblah: 1,
        obj: {
            blahblah: 2,
        }
    }


}

console.log(prod2)