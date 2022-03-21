
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



const calculateScore = (words, input, scores) => {
  // 1. assign empty results array for collecting word and score, and a  score to keep count
  let results = [];
  let score = 1;
  
  // 2. loop each word from words array by passing in the result of removeWordsWithDuplicateLetters. 
  let scrabbleWord = removeWordsWithDuplicateLetters(getWordsFromGivenLetters(words, input))
  for (let word of scrabbleWord){
    word = word.toLowerCase()
    // 3. loop through score object
    console.log('word', word)
    for (let letter of word){
      console.log('letter', letter)
      
      for(let value in scores){
        // console.log('value', scores[value])
        // console.log('value1', value)
        // 4. check each letter of the word, if it equals to scores[letter] increment score count 
        // console.log('letter', letter)
        if(letter === value){
          console.log('scores[value]',scores[value])
          score += scores[value]
        }
        // 5. if on last letter of word, push word and score to results, set score to 0
        if(letter === word[word.length - 1]){
          results.push(score + ' ' + word);
          score = 0
          break;

        }
        
      }
    }
    
  }

  return results

}
// calculate the points for eash word returned from removeWordsWithDuplicateLetters(getWordsFromGivenLetters(textByLine, 'SPCQEIU')))

module.exports = {
  getWordsFromGivenLetters,
  removeWordsWithDuplicateLetters,
  calculateScore,
}

