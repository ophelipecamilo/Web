function CalculadoraSimples (x, op, z) {
    switch (op) {
        case '+':
            return x + z
        case'-':
        return x - z
        case '*':
            return x * z
        case '/':
             return x / z
        default: 
            return "Parâmetro inválido"
    }
}

console.log(CalculadoraSimples(2, '+', 3))
console.log(CalculadoraSimples(5, '-', 1))
console.log(CalculadoraSimples(5, '*', 3))
console.log(CalculadoraSimples(10, '/', 2))