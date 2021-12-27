// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
    arr.sort((a,b) => a < b ? -1 : 1);
    let num1 = arr[0];
    let num2 = arr[1];
    while (true) {
        if (!checkDivisibility(num2) || num2 % num1 != 0) {
            num2 += arr[1];
        }
        else {
            break;
        }
    }
    function checkDivisibility(num) {
        for (let i=arr[0]; i <= arr[1]; i++) {
            if (num % i !== 0)
                return false;
            }
        return true;
    }
    return num2;
}

console.log(smallestCommons([1,13]));