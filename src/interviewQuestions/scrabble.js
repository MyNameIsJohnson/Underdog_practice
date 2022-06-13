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

const replaceBlanks = (stringOfTiles, scores) => {
  if(!stringOfTiles.includes('_')){
    return [stringOfTiles]
  }
  let listOfStringOfTiles = []
  let letters = stringOfTiles.split('');
  for(let keys in scores){
    let tilesWithReplacedBlank = []
    for (let i = 0; i < letters.length; i++){
      let letter = letters[i]
      let key; 
      key = keys.toUpperCase()
      if (letter === ('_')){
        letter = letter.replace("_", key);
      }
      tilesWithReplacedBlank.push(letter)
    }
    listOfStringOfTiles.push(tilesWithReplacedBlank)
  }
  let results = []
  for ( let i = 0; i < listOfStringOfTiles.length; i++){
    results.push(listOfStringOfTiles[i].join(''))
  }
  return results
}

const getWordsFromGivenTileLetters = (dictionary, stringOfTiles)=>{
  // empty array allWordsFromGivenLetters
  let allWordsFromGivenLetters = [];
  for (let i = 0; i < dictionary.length; i++){  
    if(dictionary[i] === ''){
      continue;
    }
    let tileLetters = stringOfTiles.split('');
    // assign word = dictionary[i]
    let dictionaryWordLetters = dictionary[i].split('');
    // console.log(dictionaryWordLetters.includes("\r"))
    // loop word 
    // how to spell word from letters      
    if(dictionaryWordLetters.length > tileLetters.length){
      continue;
    }      
    for(let j = 0; j < tileLetters.length; j++){
      if(dictionaryWordLetters.includes(tileLetters[j])){
        dictionaryWordLetters.splice(dictionaryWordLetters.indexOf(tileLetters[j]), 1)
      }
    }
    if(dictionaryWordLetters.length === 0){
      allWordsFromGivenLetters.push(dictionary[i])
    }      
  }  
  return allWordsFromGivenLetters
}

const getWordsFromGivenArray = (dictionary, arrayOfTileCombinations) => {
  let allWordsFromGivenArray = [];
  for(let i = 0; i < arrayOfTileCombinations.length; i++){
    let words = getWordsFromGivenTileLetters(dictionary, arrayOfTileCombinations[i])
    if(words.length === 0){
      continue;
    }
    allWordsFromGivenArray.push(words);
  }
  return allWordsFromGivenArray.flat()
}

// 1. This takes in a word and outputs the words scored


const getWordScore = (word, stringOfTiles, scores) => {
  let score = 0;
  let hasBlank = stringOfTiles.includes('_');

  word = word.toLowerCase()
  // 3. loop through score object
  for (let letter of word){
    // console.log('letter', letter)
    score+=scores[letter]  

        // check if letter is in stringofTiles instead
          // 
    if(hasBlank){
      score=scores[letter]
    }
  }  
  return score;
}

// calculate the points for eash word returned from removeWordsWithDuplicateLetters(getWordsFromGivenLetters(textByLine, 'SPCQEIU')))
const calculateScoresForTiles = (dictionary, stringOfTiles, scores) => {
  let results = [];
  let arrayOfTileCombinations = replaceBlanks(stringOfTiles, scores);
  let scrabbleWords = getWordsFromGivenArray(dictionary, arrayOfTileCombinations);

  for (let word of scrabbleWords){
    let score = getWordScore(word, stringOfTiles, scores);

    results.push(`${score} ${word}`);
  }
  return results
}

module.exports = {
  getWordsFromGivenTileLetters,
  removeWordsWithDuplicateLetters,
  calculateScoresForTiles,
  replaceBlanks,
  getWordsFromGivenArray,
  getWordScore,
}

