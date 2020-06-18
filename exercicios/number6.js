const capital = 0
const taxa = 0
const tempo = 0

function JurosSimples(capital, taxa, tempo) {
    return Juros = capital * (taxa/100) * tempo,
    valor = capital + Juros,
    console.log(`Juros Simples: ${Juros}, Valor Total:${valor}`)
} 

function JurosCompostos (capital, taxa, tempo) {
    return Juros = capital * ((1 + (taxa/100)) ** tempo),
    valor = capital + Juros,
    console.log(`Juros Compostos: ${Juros.toFixed(2)}, Valor Total:${valor.toFixed(2)}`)
}

JurosSimples(10000, 5, 12)
JurosCompostos(10000, 5, 12)