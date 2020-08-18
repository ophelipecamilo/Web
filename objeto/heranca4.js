function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.___proto___ === obj2.___proto___)
console.log(MeuObjeto.prototype === obj1.___proto___)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Phelipe'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Maria'
obj3.falar()


