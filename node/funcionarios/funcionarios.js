const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
    .filter(nacionalidade)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})

const nacionalidade = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
} 

