let suma=require("./sum.js")
let resta=require("./subs.js")
let multi=require("./multi.js")
let div=require("./div.js")
let modulo=require("./mod.js")

let n1=14
let n2=12

function print(operacion, resultado) {
    console.error(
        `El resultado ${operacion} de ${n1} y ${n2} es ${resultado}`,
        )
}

print(`de la suma`, suma(n1,n2))
print(`de la resta`, resta(n1,n2))
print(`de la multiplicación`, multi(n1,n2))
print(`de la división`, div(n1,n2))
print(`del resto`, modulo(n1,n2))






