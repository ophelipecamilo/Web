// Clouse é o escopo criado quando a função é definida
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto Léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())