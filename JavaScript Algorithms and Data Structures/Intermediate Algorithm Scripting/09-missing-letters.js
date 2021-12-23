// Missing letters
// Find the missing letter in the passed letter range and return it.
// // If all letters are present in the range, return undefined.


function fearNotLetter(str) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
	console.log()
	let referenceArray = alphabet.slice(alphabet.indexOf(str.slice(0,1)), (alphabet.indexOf(str.slice(-1))+1));
	let missingLetter = referenceArray.filter(letter => !str.split("").includes(letter));
	return missingLetter[0];
}

fearNotLetter("abcdefghjklmno");