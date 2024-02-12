function sum(n1, n2) {
	//IF n1 or n2 is not a number, show error message, else return n1+n2
	let typeOfN1 = typeof n1
	let n1IsANumber = typeOfN1 == "number"
	let typeOfN2 = typeof n2
	let n2IsANumber = typeOfN2 == "number"

	if (n1IsANumber == true && n2IsANumber == true) {
		return n1 + n2
	}
	else {
		return "not valid number"
	}
}
module.exports = sum


