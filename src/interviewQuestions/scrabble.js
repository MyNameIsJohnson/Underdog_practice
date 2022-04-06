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

var charDoesNotRepeats = function(str) {
  // for (var i=0; i<str.length; i++) {
  //   if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
  //     return false; // repeats
  //   }
  // }
  // return true;

  let setString = new Set(str);

  return setString.size === str.length

}

const removeWordsWithDuplicateLetters = (words) => {
  return words.filter(charDoesNotRepeats)
  // let result = []
  // for (let word of words){
    
  //   let givenLetters = charDoesNotRepeats(word);
  //   if (givenLetters){

  //     result.push(word)
  //   }
  // }
  // return result
}




// how to convert _ to equal any letter (wildcard)
// 
const replaceBlanks = (stringOfLetters, scores) => {
  let listOfStringOfLetters = []
  let letters = stringOfLetters.split('');
  for(let keys in scores){
    let stringWithReplacedBlank = []
    for (let i = 0; i < letters.length; i++){
      let letter = letters[i]
      let key; 
      key = keys.toUpperCase()
      if (letter === ('_')){
        letter = letter.replace("_", key);
      }
      stringWithReplacedBlank.push(letter)
    }
    listOfStringOfLetters.push(stringWithReplacedBlank)
  }
  let results = []
  for ( let i = 0; i < listOfStringOfLetters.length; i++){
    results.push(listOfStringOfLetters[i].join(''))
  }
  return results
}
const getWordsFromGivenLetters = (sowpods, stringOfLetters)=>{

  // empty array allWordsFromGivenLetters
  let allWordsFromGivenLetters = [];

  for (let i = 0; i < sowpods.length; i++){  
    if(sowpods[i] === ''){
      continue;
    }  
    let letters = stringOfLetters.split('');
    // assign word = sowpods[i]
    let word = sowpods[i].split('');
    // loop word 
    // how to spell word from letters

    if(word.length > letters.length){
      continue;
    }
    
    for(let j = 0; j < letters.length; j++){
      if(word.includes(letters[j])){
        word.splice(word.indexOf(letters[j]), 1)
      }
    }
    if(word.length === 0){
      allWordsFromGivenLetters.push(sowpods[i])
    }

  }
  return allWordsFromGivenLetters
}

// calculate the points for eash word returned from removeWordsWithDuplicateLetters(getWordsFromGivenLetters(textByLine, 'SPCQEIU')))
const calculateScore = (words, input, scores) => {
  // 1. assign empty results array for collecting word and score, and a  score to keep count
  let results = [];
  
  // if input includes "_",
  // 2. loop each word from words array by passing in the result of removeWordsWithDuplicateLetters. 
  let scrabbleWord = removeWordsWithDuplicateLetters(getWordsFromGivenLetters(words, input))
  for (let word of scrabbleWord){
    let score = 0;
    word = word.toLowerCase()
    // 3. loop through score object
    for (let letter of word){
      // console.log('letter', letter)
      score+=scores[letter]


      // for(let value in scores){
      //   // console.log('value', scores[value])
      //   // console.log('value1', value)
      //   // 4. check each letter of the word, if it equals to scores[letter] increment score count 
      //   // console.log('letter', letter)
      //   if(letter === value){
      //     console.log('scores[value]',scores[value])
      //     score += scores[value]
      //   }
        // 5. if on last letter of word, push word and score to results, set score to 0
        // if(letter === word[word.length - 1]){
        //   results.push(score + ' ' + word);
        //   score = 0
        //   break;
        // }        
        
    }  
    results.push(`${score} ${word}`);
  }
  return results
}



module.exports = {
  getWordsFromGivenLetters,
  removeWordsWithDuplicateLetters,
  calculateScore,
  replaceBlanks,
}

