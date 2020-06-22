function ComprarVeiculo (veiculo) {
    switch (veiculo) {
        case 'Hatch':
            return 'Compra efetuada com sucesso!'
        case'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default: 
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(ComprarVeiculo('Hatch'))
console.log(ComprarVeiculo('Sedan'))
console.log(ComprarVeiculo('Motocicleta'))
console.log(ComprarVeiculo('Caminhonete'))
console.log(ComprarVeiculo('Bicicleta'))