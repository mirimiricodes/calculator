let calc=require("./calculator.js")


let n1=14
let n2=12

function print(operacion, resultado) {
    console.log(
        `El resultado ${operacion} de ${n1} y ${n2} es ${resultado}`,
        )
}

print(`de la suma`, calc.suma(n1,n2))
print(`de la resta`, calc.resta(n1,n2))
print(`de la multiplicación`, calc.multi(n1,n2))
print(`de la división`, calc.div(n1,n2))
print(`del resto`, calc.modulo(n1,n2))






