function add (num1, num2) {
	return num1 + num2;
}

function subtract (minuend, subtrahend) {
	return minuend - subtrahend;
}

function sum (array) { 
	let initialValue = 0;
	
	let reducer = (accumulator, item) => {
		return accumulator + item;
	}

	let sum = array.reduce(reducer, initialValue);

	return sum;
} 

function multiply (array) {
	let initialValue = 1;
	
	let reducer = (accumulator, item) => {
		return accumulator * item;
	}

	let product = array.reduce(reducer, initialValue);

	return product;
	
} 

function power(base, exponent) {
	return Math.pow(base, exponent);
}

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return (n != 1) ? n * factorial(n - 1) : 1;
	}	
} 

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}