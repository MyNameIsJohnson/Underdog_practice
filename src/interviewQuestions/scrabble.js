
// Write code that:

// - Accepts a string (either as a command-line argument or as an argument to a function)
// - Prints out the words that can be made from those characters, along with their Scrabble scores, one word per line, in descending score order

// Example input and output:

// `$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
// `17 piques`
// `17 equips`
// `16 quips`
// `16 pique`
// `16 equip`
// `15 quip`
// `…`

var charRepeats = function(str) {
  for (var i=0; i<str.length; i++) {
    if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
      return false; // repeats
    }
  }
  return true;
}


const getWordsFromGivenLetters = (sowpods, stringOfLetters)=>{
  console.log(sowpods.length)
  // empty array allWordsFromGivenLetters
  let allWordsFromGivenLetters = [];
  // letters = split stringOfLetters
  let letters = stringOfLetters.split('');
  // loop sowpod 
  for (let i = 0; i < sowpods.length; i++){
    
    // assign word = sowpods[i]
    let word = sowpods[i];
    // loop word 
    for (let j = 0; j < word.length; j++){
      // if letters includes word[j]
      if (!letters.includes(word[j])){
        // continue
        break;
      }
      
      // check if letterOfWord[i] is on last index
      if (j === word.length -1 ){        // push word to allWordsFromGivenLetters
        allWordsFromGivenLetters.push(word)
      }
    }
  }
  return allWordsFromGivenLetters
}

const removeWordsWithDuplicateLetters = (words) => {
  

  let result = []
  for ( let i = 0; i < words.length; i++){
    
    let givenLetters = charRepeats(words[i]);
    if (givenLetters === true){

      result.push(words[i])
    }
  }
  return result
}

// calculate the points for eash word returned from removeWordsWithDuplicateLetters(getWordsFromGivenLetters(textByLine, 'SPCQEIU')))

module.exports = {
  getWordsFromGivenLetters,
  removeWordsWithDuplicateLetters,
}

