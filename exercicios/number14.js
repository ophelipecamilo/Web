function Sacolao (fruit) {
    switch (fruit) {
        case 'Maçã':
            return 'Não vendemos esta fruta aqui'
        case'Kiwi':
            return 'Estamos com escassez de kiwis'
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo' 
        default: 
            return "Produto Indispoível"
    }
}

console.log(Sacolao('Maçã'))
console.log(Sacolao('Kiwi'))
console.log(Sacolao('Melancia'))
console.log(Sacolao('ABC'))