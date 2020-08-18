const aluno1 = {
    nome: 'Fernando',
    idade: 24,
    endereco: {
        logradouro: 'Rua A',
        numero: 796,
        bairro: 'Tomazinho',
        idBairro: '1'
    }
}

const aluno2 = {
    nome: 'Phelipe',
    idade: 24,
    endereco: {
        logradouro: 'Rua B',
        numero: 796,
        bairro: 'Tomazinho',
        idBairro: '1'
    }
}

const aluno3 = {
    nome: 'Maria Camilo',
    idade: 15,
    endereco: {
        logradouro: 'Rua A',
        numero: 796,
        bairro: 'Éden',
        idBairro: '2'
    }
}

const aluno4 = {
    nome: 'Ana',
    idade: 12,
    endereco: {
        logradouro: 'Rua A',
        numero: 796,
        bairro: 'Tomazinho',
        idBairro: '1'
    }
}

turma = [aluno1, aluno2, aluno4, aluno3]
console.log(turma.length)

const BairrosDaTurma = []

for (var i = 0; i < turma.length; i++) {
    var y = 0
    if( i == 0 ) {
        // console.log(turma[i])
        BairrosDaTurma.push(turma[i])

    } else if(turma[i].endereco.idBairro != turma[y].endereco.idBairro ) {
        // console.log(turma[i])
        y++
        BairrosDaTurma.push(turma[i])
    } else // turma.splice(i, 1)
    y++
}

console.log(BairrosDaTurma)
console.log(BairrosDaTurma.length)

// function BairrosDaTurma (turma, idBairro) {
//     if (turma.indexOf(idBairro) === -1) {
//         console.log(idBairro)
//     } else if (turma.indexOf(idBairro) > -1) {
//         console.log(`${idBairro} já existente`)
//     }
// }
//     for (var i = 0; i < turma.length; i++) {
//         BairrosDaTurma(turma, turma[i].endereco.idBairro)
//     }


// values = turma.filter(function (a) {
// 	return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
// }, Object.create(null))

// console.log(values)