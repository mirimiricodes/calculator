let calc = require("../core/calculator")
let readline = require("readline-sync")

function render() {
    renderMenu()
    let { userSelection, userN1, userN2 } = collectUserData()
    showResult(userSelection, userN1, userN2)
    render()
}

function showResult(userSelection, userN1, userN2) {
    switch (userSelection) {
        case "1":
            console.log(calc.suma(userN1, userN2))
            break
        case "2":
            console.log(calc.resta(userN1, userN2))
            break
        default:
            console.log("Choose an operation (1 or 2)")
            break
    }
}

function collectUserData() {
    let userSelection = readline.question()
    console.log("Choose 1st number:")
    let userN1 = readline.questionInt()
    console.log("Choose 2nd number:")
    let userN2 = readline.questionInt()
    return { userSelection, userN1, userN2 }
}

function renderMenu() {
    console.log("Choose an operation:")
    console.log("1. SUM")
    console.log("2. SUBSTRACTION")
}

console.log("Calculator")
console.log("")
render()
