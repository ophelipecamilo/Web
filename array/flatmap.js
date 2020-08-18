const escola = [
    { turma: '3MA',
      alunos: [
        { nome: 'Phelipe',
            nota: 8.3},
        { nome: 'Katryna',
            nota: 9.6}
               ]
    },
    { turma: '2MA',
      alunos: [
        { nome: 'Maria',
            nota: 7.4},
        { nome: 'Fernando',
            nota: 6.1}
               ]
    }
]

const getNotaAluno = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)