function Faculdade(cd, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let MediaFinal = ((notas[0]*4) + (notas[1]*3 + (notas[2]*3)))/10
    console.log(`Código do Aluno: ${cd}, 
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Média Final: ${MediaFinal} ${MediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)
}

Faculdade(10, 5, 7, 8)
Faculdade(7, 5, 7, 2)
Faculdade(5, 2, 3, 1)