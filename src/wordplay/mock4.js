var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')
// What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties. // 

// 1. Find all words in the dictionary that includes letters "RSTLNE"

const getWordsFromGivenString = (dictionary, string) =>{
  // assign empty array to return all words
  let allWords = [];
  // split string into letters
  let letters = string.split('');
  // loop through dictionary 
  for(let i = 0; i < dictionary.length; i++){
    // assign word equal to dictionary at index
    let word = dictionary[i];
    // loop through word
    for( let j = 0; j < word.length; j++){
      // if letters doesn't include word at index j break from loop
      if(!letters.includes(word[j])){
        break;
      }
      // if iteration of j is at last index of word, then push word to allWords 
      if(j === word.length-1){
        allWords.push(word)
      }
    }    
  }
  return allWords
}
// console.log(getWordsFromGivenString(textByLine, 'RSTLNE'))

// 2. Find the longest word in the list from getWordsFromGivenString 

const getLongest = (dictionary, string) => {
  // assign getWordsFromGivenString to words 
  let words = getWordsFromGivenString(dictionary, string);
  // assign longest to equal words index 0
  let longest = words[0];
  // assign empty array to return longest words
  let longestWords = []
  // loop through words 
  for(let i = 0; i < words.length; i++){
    // word to equal words at index
    let word = words[i];
    // if word length is greater then length of longest, 
    if(word.length > longest.length){
      // push word to longestWords,  
      longestWords.push(word)
      // reassign longest to equal first word in longestWords,
      longest = longestWords[0]
      // clear longestWords
      longestWords = []
    }
    // check for ties, if word and longest length is equal, push word to longestWords
    if(word.length === longest.length){
      longestWords.push(word)
    }   
  }
  return longestWords
}

console.log(getLongest(textByLine, 'RSTLNE'))



