// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

// Agora e so pegar os resultados
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 22] // Array
console.log( Array.min(vetor) ); // Menor valor
console.log( Array.max(vetor) ); // Maior valor