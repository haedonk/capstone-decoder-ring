// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const square = {"a" : 11, "b" : 21, "c" : 31, "d" : 41, "e" : 51, "f" : 12, "g" : 22, "h" : 32, "i" : 42, "j" : 42, "k" : 52, "l" : 13, "m" : 23, "n" : 33, "o" : 43, "p" : 53, "q" : 14, "r" : 24, "s" : 34, "t" : 44, "u" : 54, "v" : 15, "w" : 25, "x" : 35, "y" : 45, "z" : 55}
    let newWord = "";
    const inputWord = input.toLowerCase();
    if(encode){
        for(let i = 0; i < inputWord.length; i++){
            if(97 <= inputWord[i].charCodeAt(0) && inputWord[i].charCodeAt(0) <= 122){
                newWord += square[inputWord[i]];
            }
            else{
                newWord += inputWord[i];
            }
        }
    }
    else{
        let test = input.split(" ");
        test = test.join("");
        if(test.length % 2 === 1) return false;
        for(let i = 0; i < inputWord.length; i += 2){
            let theLetterInNum = "";
            theLetterInNum += inputWord[i] + inputWord[i+1];
            if(theLetterInNum === "42"){
                newWord += "(i/j)";
            }
            else if(49 <= inputWord[i].charCodeAt(0) && inputWord[i].charCodeAt(0) <= 53){
                const theLetter = findLetter(theLetterInNum, square);
                newWord += theLetter;
            }
            else{
                newWord += inputWord[i];
                i--;
            }
        }
    }
    return newWord;
  }

  function findLetter(theLetterInNum, square){
      const squareKeys = Object.keys(square);
      let count = 0;
      for(let num in square){
          if(parseInt(theLetterInNum) === square[num]) return squareKeys[count];
          count++;
      }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
