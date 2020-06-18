function QualTriangulo (x, y, z) {
    if (typeof y !== Number) {
        (console.log('Parâmetros Inválidos'))
    } else if (x == y && y == z ) {
        console.log(`Este é um trigangulo Equilátero, e seus lados são: ${x}, ${y}, ${z}`)
    } else if (x == y && y != z || y == z && x != y) {
        console.log(`Este é um trigangulo Isósceles, e seus lados são: ${x}, ${y}, ${z}`)
    } else if (x != y && y != z || y != z && x != y) {
        console.log(`Este é um trigangulo Escaleno, e seus lados são: ${x}, ${y}, ${z}`)
    }  
}

QualTriangulo(2, 2, 2)
QualTriangulo(2, 2, 3)
QualTriangulo(1, 2, 5)

QualTriangulo(1, 'a', 5)
