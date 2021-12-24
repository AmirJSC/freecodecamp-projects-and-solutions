// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
	let fibonacciArr = [1,1]
	for (let i = 2; i <= fibonacciArr.length; i++) {
		let nextValue = fibonacciArr[i-2] + fibonacciArr[i-1]
		if (nextValue > num) {
			return fibonacciArr.filter(item => item % 2 != 0).reduce((a,b) => a+b);
		}
		fibonacciArr.push(nextValue)
	}
}

console.log(sumFibs(75025));


// Simpler solution
function sumFibs(num) {
	let previousValue = 0;
	let currentValue = 1;
	let sum = 0;
	while (currentValue <= num) {
		if (currentValue % 2 !== 0) {
			sum += currentValue;
		}
		currentValue += previousValue;
		previousValue = currentValue - previousValue;
	}
}