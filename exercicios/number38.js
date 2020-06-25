function ImparesIntervalo([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    
    for (let i = min; i <= max; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }}
}

console.log(ImparesIntervalo([50, 40]))
//console.log(ImparesIntervalo([992]))
//console.log(ImparesIntervalo([,10]))
//console.log(ImparesIntervalo([]))