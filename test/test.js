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

function assertEquals(description, input, expected) {

    if (input==expected) {
        console.log(`${description}: OK!`)
    }
    else {
        console.log(`${description}: ERROR!`)
    }
}
assertEquals("Suma 1 y 1", calc.suma(1,1), 2)
assertEquals("Suma 30 y 4", calc.suma(30,4), 34) 
assertEquals("Resta 6 y 2", calc.resta(6,2), 4)
assertEquals("Resta 10 y 6", calc.resta(10,6), 4)
assertEquals("Multiplicación 4 y 6", calc.multi(4,6), 24)
assertEquals("Multiplicación 5 y 6", calc.multi(5,6), 30)
assertEquals("División 35 y 7", calc.div(35,5), 7)
assertEquals("División 21 y 7", calc.div(21,7), 3)
assertEquals("Resto 2 y 2", calc.modulo(2,2), 0)
assertEquals("Resto 7 y 2", calc.modulo(7,2), 1)




















