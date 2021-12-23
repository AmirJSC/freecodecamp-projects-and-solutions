// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("AllThe-small Things") should return the string all-the-small-things


function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  return str.split(/\s+|_+/).join("-").toLowerCase();
}
spinalCase('The_Andy_Griffith_Show');