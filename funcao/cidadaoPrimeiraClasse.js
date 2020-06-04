function fun1() {}

// Armazenar em uma variável
const fund2 = function() {}

// Armazenar em uma Array
const array = [function(a, b) { return a + b}, fun1, fund2]
console.log(array[0](2, 5))

// Armazenar em atributo do obj
const obj = {}
obj.falar = function() {return 'Opa!'}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun) {
    fun()
}
run(function() { console.log('Executando') } )

// Uma funcao pode retornar/conter outra funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(5, 2)(5)