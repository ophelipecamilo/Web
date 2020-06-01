/* 
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

xor = exclusivo ter que ser iguais

!v -> f
!f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operador ou
    const comprarTv50 = trabalho1 && trabalho2 // operador E
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor Operador bit a bit
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
