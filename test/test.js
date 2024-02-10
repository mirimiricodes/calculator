let calc=require("../src/calculator.js")


let n1=14
let n2=12

function print(operacion, resultado) {
    console.log(
        `El resultado ${operacion} de ${n1} y ${n2} es ${resultado}`,
        )
}

// print(`de la suma`, calc.suma(n1,n2))
// print(`de la resta`, calc.resta(n1,n2))
// print(`de la multiplicación`, calc.multi(n1,n2))
// print(`de la división`, calc.div(n1,n2))
// print(`del resto`, calc.modulo(n1,n2))

function assert(input, expected) {
    if (input==expected) {
        console.log("OK!")
    }
    if (input!=expected) {
        console.log("ERROR")
    }
}
assert(calc.suma(1,1), 2)
assert(calc.suma(30,4), 34)
assert(calc.resta(6,2), 4)
assert(calc.resta(10,6), 4)
assert(calc.multi(4,6), 24)
assert(calc.multi(5,6), 30)
assert(calc.div(35,5), 7)
assert(calc.div(21,7), 3)
assert(calc.modulo(2,2), 0)
assert(calc.modulo(7,2), 1)




















