let calc = require("../core/calculator")
let readline = require("readline-sync")

function render() {
    printWelcome()
    renderMenu()
    let userSelection = readline.question()
    showChosenOperation(userSelection)
    let { userN1, userN2 } = chooseNumbers()
    let result = computeResult(userSelection, userN1, userN2)
    showResult(result)
    render()
}

function showResult(result) {
    console.log()
    console.log("Your result is:", result)
    console.log()
}

function computeResult(userSelection, userN1, userN2) {
    switch (userSelection) {
        case "1":
            return calc.suma(userN1, userN2)
        case "2":
            return calc.resta(userN1, userN2)
        case "3":
            return calc.multi(userN1, userN2)
        case "4":
            return calc.div(userN1, userN2)
    }
}

function showChosenOperation(userSelection) {
    console.log()
    switch (userSelection) {
        case "1":
            console.log("Great! You chose an addition!")
            break
        case "2":
            console.log("Let's substract!")
            break
        case "3":
            console.log("I see you want to multiply...")
            break
        case "4":
            console.log("Looks like you want to divide...")
            break
        default:
            "Choose an operation (1, 2, 3 or 4)"
    }
}


function chooseNumbers() {
    console.log()
    console.log("# Choose 1st number:")
    let userN1 = readline.questionInt()
    console.log()
    console.log("# Choose 2nd number:")
    let userN2 = readline.questionInt()
    return { userN1, userN2 }
}



function renderMenu() {
    console.log("# Choose an operation:")
    console.log("1. ADDITION")
    console.log("2. SUBSTRACTION")
    console.log("3. MULTIPLICATION")
    console.log("4. DIVISION")
    console.log("")
}

function printWelcome() {
    console.log("Welcome to Mirimiri's first calculator!")
    console.log()
}

render()
