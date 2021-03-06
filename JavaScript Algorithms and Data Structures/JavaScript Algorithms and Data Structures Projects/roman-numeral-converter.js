// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
	let toRomanNumerals = [[1000, "M"], [900,"CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
	let romanEquivalent = "";

	for (let x of toRomanNumerals) {
  		while (num >= x[0]) {
    		romanEquivalent += x[1];
    		num -= x[0];
  		}
	}
 	return romanEquivalent;
}

convertToRoman(1023);