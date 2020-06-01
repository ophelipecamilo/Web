// Novo recurso introduzido no EC 2015
const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 71
    }
}
const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = pessoa 
console.log(n, i)

const { sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)