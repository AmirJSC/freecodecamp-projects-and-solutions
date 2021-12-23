// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10


function sumAll(arr) {
	let newArr = [...arr];
  	let sum = 0;
  	newArr.sort((a,b) => a < b ? -1: 1);
  	for (let i=newArr[0]; i <= newArr[1]; i++) {
    	sum += i;
  	}
  return sum;
}