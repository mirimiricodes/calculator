let suma = require("./sum.js")
let resta = require("./subs.js")
let multi = require("./multi.js")
let div = require("./div.js")
let modulo = require("./mod.js")

function safeSum(n1, n2) {
    if (typeof n1 == "number" && typeof n2 == "number") {
        return suma(n1, n2)
    }
    else {
        return "not valid number"
    }
}

module.exports = {
    suma: safeSum,
    resta,
    multi,
    div,
    modulo
}