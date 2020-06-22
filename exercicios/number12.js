function Fatorial (x) {
    if(x == 0){
        return 1
    } else {
        return x * Fatorial(x - 1)
    }
}

console.log(Fatorial(4))