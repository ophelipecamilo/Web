function Conversao (x) {
    x = 0.30000000000000004;
    return x
}

console.log('R$',Conversao().toFixed(2).toString().replace(".",","));

--

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)