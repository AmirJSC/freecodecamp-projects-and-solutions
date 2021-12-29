// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
    let newStr = "";
    for (let i=0; i < str.length; i++) {
        if (/\W/.test(str[i])) {
            newStr += str[i];
            continue;
        }
        if (str[i].charCodeAt() + 13 > 90) 
            newStr += String.fromCharCode(str[i].charCodeAt() - 13);
        if (str[i].charCodeAt() + 13 <= 90)
            newStr += String.fromCharCode(str[i].charCodeAt() + 13);
    }
    return newStr;
}

console.log(rot13("SERR CVMMN!"));