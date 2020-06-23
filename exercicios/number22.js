function JurosCompostos (capital, taxa, tempo) {
    return Juros = capital * ((1 + (taxa/100))**tempo),
    console.log(Juros.toFixed(2))
}


function Mensalidade (valor, mes) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return JurosCompostos(valor, 5, atraso) 
    } else {
        return 'Mês inválido.'
} }

Mensalidade(100, 1)

Mensalidade(100, 3)