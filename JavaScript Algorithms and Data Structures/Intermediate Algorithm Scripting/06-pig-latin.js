// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.


function translatePigLatin(str) {
	let consonant = /^[^aeiou]+/
  	if (consonant.test(str)) {
  		str = str.replace(consonant, "") + str.match(consonant) + "ay"
  		return str;
  }
  	str = str + "way";
  	return str;
}

console.log(translatePigLatin("algorithm"));