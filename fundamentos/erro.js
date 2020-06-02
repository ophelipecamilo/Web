function tratarErroELancar(erro) {
    throw new Error('Erro ocorrido, entre em contato com a T.I.')
}

function ImprimirNomeGrifado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}
const obj = {nome: 'Phelipe'}
ImprimirNomeGrifado(obj)