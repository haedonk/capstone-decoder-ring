// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newWord = "";
    const inputWord = input.toLowerCase();
    let shiftNum = 0;
    for(let i = 0; i < inputWord.length; i++){
        if(97 <= inputWord[i].charCodeAt(0) && inputWord[i].charCodeAt(0) <= 122){
          const letterNum = findLetNum(inputWord[i], alphabet);
          if(encode){
              shiftNum = letterNum + shift;
          }
          else{
              shiftNum = letterNum - shift;
          }
          if(shiftNum < 0) shiftNum += 26;
          if(shiftNum > 25) shiftNum -= 26
          newWord += alphabet[shiftNum];
      }
      else{
          newWord += inputWord[i];
      }
    }
    return newWord
    }


  function findLetNum(letter, alphabet){
    for(let letters in alphabet){
        if(letter === alphabet[letters]) return parseInt(letters);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
