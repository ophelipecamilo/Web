// Usando a notação literal 
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.GetPrecoComDesconto = () => preco * (1 - desconto)
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('MacBook', 2000, 0.25)

console.log(p1.GetPrecoComDesconto())
console.log(p2.GetPrecoComDesconto())

// Função Factory
function CriarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        GetSalario() {
            return ((salarioBase / 30) * (30 - faltas)) }
    }
}

const f1 = CriarFuncionario('João', 7980, 4)
const f2 = CriarFuncionario('Maria', 11900, 1)
const f3 = CriarFuncionario('Phelipe', 14560, 5)
console.log(f1.GetSalario(), f2.GetSalario(), f3.GetSalario())

// Oject.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)