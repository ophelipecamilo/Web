function PlanoAumento (salario, plano) {
    switch (plano) {
        case 'A':
            return salario + (salario * (10/100))
        case'B':
        return salario + (salario * (15/100))
        case 'C':
            return salario + (salario * (20/100))
        default: 
            return "Parâmetro inválido"
    }
}

console.log(PlanoAumento(1000, 'A'))
console.log(PlanoAumento(1000, 'B'))
console.log(PlanoAumento(1000, 'C'))