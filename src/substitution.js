// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length != 26) return false;
    if(ifDuplicates(alphabet)) return false;
    const regAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let alphasJoined = {};
    let newWord = "";
    input = input.toLowerCase();
    for(let i = 0; i < 26; i++){
      alphasJoined[regAlphabet[i]] = alphabet[i];
    }
    if(encode){
      for(let i = 0; i < input.length; i++){
        if(input[i].charCodeAt(0) != 32){
            newWord += alphasJoined[input[i]];
        }
        else{
            newWord += input[i];
        }
      }
    }
    else{
        for(let i = 0; i < input.length; i++){
            if(input[i].charCodeAt(0) != 32){
            const theLetter = findIndex(input[i], alphabet);
            newWord += regAlphabet[theLetter];
            }
        else{
            newWord += input[i];
        }
    }
    }
    return newWord;
  }

  function findIndex(input, alphabet){
    for(let letter in alphabet){
        if(input === alphabet[letter]) return letter;
    }
  }

  function ifDuplicates(alphabet){
    for(let letter in alphabet){
      for(let i = letter + 1; i < alphabet.length; i++){
          if(alphabet[letter] === alphabet[i]){
              return true;
          }
      }
  }
  }

  return {
    substitution,
  };


})();


module.exports = { substitution: substitutionModule.substitution };
