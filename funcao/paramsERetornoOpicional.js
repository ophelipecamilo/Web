function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor de área não permitido. ${area}m2 `)
    } else {
        return area 
    }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(3, 3, 5, 6, 7, 1))
console.log(area(5, 5))