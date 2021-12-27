// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


  function binaryAgent(str) {
    return str.split(" ").map(function binaryToChar(item) {
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            if (item[i] == "1") {
                sum += 2**[item.length-1-i]
            }
        }
        return String.fromCharCode(sum);
    }).join("");
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");