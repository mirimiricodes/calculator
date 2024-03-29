let suma = require("./sum.js")
let resta = require("./subs.js")
let multi = require("./multi.js")
let div = require("./div.js")
let modulo = require("./mod.js")

function decideOperation(operation, n1, n2) {
    switch (operation) {
        case "s":
            return suma(n1, n2)
        case "r":
            return resta(n1, n2)
        case "m":
            return multi(n1, n2)
        case "d":
            return div(n1, n2)
        case "mo":
            return modulo(n1, n2)
        default:
            throw new Error("unknown operation")
    }
}

function safeOperation(operation, n1, n2) {
    if (typeof n1 == "number" && typeof n2 == "number") {
        return decideOperation(operation, n1, n2)
    }
    else {
        return "not valid number"
    }
}

function safeSum(n1, n2) {
    return safeOperation("s", n1, n2)
}

function safeSubs(n1, n2) {
    return safeOperation("r", n1, n2)
}

function safeMulti(n1, n2) {
    return safeOperation("m", n1, n2)
}

function safeDiv(n1, n2) {
    if (n2 == 0) {
        return "can't be divided by 0"
    }

    else {
        return safeOperation("d", n1, n2)
    }
}

function safeMod(n1, n2) {
    return safeOperation("mo", n1, n2)
}

module.exports = {
    suma: safeSum,
    resta: safeSubs,
    multi: safeMulti,
    div: safeDiv,
    modulo: safeMod
}