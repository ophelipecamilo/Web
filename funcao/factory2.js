function CriarProduto(Nome, Marca, Modelo, Preco) {
    return {
        Nome,
        Marca,
        Modelo,
        Preco,
        Desconto: 0.1
    }
}

console.log(CriarProduto('iPhone X','Apple','X 256 Gb',3000))
console.log(CriarProduto('Macbook Pro','Apple','Mid 2010',2000))