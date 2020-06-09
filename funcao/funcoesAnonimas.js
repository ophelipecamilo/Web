const soma = function (x, y) {
    return x + y
}

const ImrpimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
} 

ImrpimirResultado(3, 4)
ImrpimirResultado(3, 4, soma)
ImrpimirResultado(3, 4, function (x, y) {
    return x - y
})

ImrpimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()