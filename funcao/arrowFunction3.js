let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // Não altera o apontamento por causa da ArrowFunction
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)