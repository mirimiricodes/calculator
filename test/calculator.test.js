let calc = require("../src/calculator")
let assert = require("assert")

describe("calculator test", () => {
    describe("addition test", () => {

        it("should add 1 and 1", () => {
            assert.equal(calc.suma(1, 1), 2)
        })
        it("should add 4 and 4", () => {
            assert.equal(calc.suma(4, -4), 0)
        })

        it("should handle non numeric values", () => {
            assert.equal(calc.suma(4, "not a number"), "not valid number")
        })

    })

    describe("substraction test", () => {

        it("should substract 2 from 8", () => {
            assert.equal(calc.resta(8, 2), 6)
        })
        it("should substract 2 from 5", () => {
            assert.equal(calc.resta(5, 3), 2)
        })

        it("should handle non numeric values", () => {
            assert.equal(calc.resta(4, "not a number"), "not valid number")

        })
    })

    describe("multiplication test", () => {

        it("should multiply 6 and 4", () => {
            assert.equal(calc.multi(6, 4), 24)
        })
        it("should multiply 7 and 6", () => {
            assert.equal(calc.multi(7, 6), 42)
        })
        it("should handle non numeric values", () => {
            assert.equal(calc.multi(4, "not a number"), "not valid number")
        })

    })

    describe("division test", () => {

        it("should divide 12 by 2", () => {
            assert.equal(calc.div(12, 2), 6)
        })
        it("should divide 10 by 2", () => {
            assert.equal(calc.div(10, 2), 5)
        })
        it("should handle non numeric values", () => {
            assert.equal(calc.div(4, "not a number"), "not valid number")
        })
    })

    describe("module test", () => {

        it("should give remainder of 2 by 2", () => {
            assert.equal(calc.modulo(2, 2), 0)
        })
        it("should give remainder of 7 by 2", () => {
            assert.equal(calc.modulo(7, 2), 1)
        })
        it("should handle non numeric values", () => {
            assert.equal(calc.modulo(4, "not a number"), "not valid number")
        })
    })

})