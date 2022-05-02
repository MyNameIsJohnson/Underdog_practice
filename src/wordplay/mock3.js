var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')

// What are all of the words that have only “E” as the vowel and are at least 15 letters?

let vowelsWithoutE = ["A","I","O","U"]

const getWordsWithOnlyEAnd15LettersOrLonger = (sowpods) =>{
  let arr = [];
  for(let i = 0; i < sowpods.length; i++){
    if((sowpods[i].includes('E')) && (sowpods[i].length >= 15) && (noOtherVowelsButE(sowpods[i]))        
    ){
      arr.push(sowpods[i])
    }
  }
  return arr
}

const noOtherVowelsButE = (word) => {
  if(!word.includes("A") 
    && !word.includes("I") 
    && !word.includes("O") 
    && !word.includes("U")) {
      return true
    }else{
      return false
    }        
}


// console.log(getWordsWithOnlyEAnd15LettersOrLonger(textByLine))

// console.log(noOtherVowelsButE("BEEKEEPAR"))

// - What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

const checkProAndIng = (sowpods) => {
  let arr = [];
  for(let i = 0; i < sowpods.length; i++){
    if(sowpods[i].startsWith("PRO") && sowpods[i].endsWith("ING")){
      arr.push(sowpods[i])
    }

  }
  return arr
}

// take output of checkProAndIng and sort ascending order 
// if word is shorter then shortest
  // set shortestWords to empty array
  // push word to shortestWords
// if word is equal length
  // push to shortestWords

const getShortest = (sowpods) => {
  let words = checkProAndIng(sowpods);
  let shortest = words[0];
  let shortestWords = []
  for(let i = 0; i < words.length; i++){
    if(words[i].length < shortest.length){
      shortestWords.push(words[i])
      shortest = shortestWords[0]
      shortestWords = []
    }
    if(words[i].length === shortest.length){
      shortestWords.push(words[i])
    }   
  }
  return shortestWords
}

// console.log('shortestWords',getShortest(textByLine))

// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

// output: [ set, test, nets ]

// Use the dictionary of words to compare to 
// Need to check if any of the words in the dict includes the string of letters
// If so add those words to an array
// must loop through dict 
  // must split string of letter into array of letters
  // assign word to dictionary[i]
  // if word includes letters of split string
    // continue
  // if word[word.length - 1]
    // push word to words array
// return words array

const getWords = (dictionary, string) =>{
  let allWords = [];
  let letters = string.split('');
  for ( let i = 0; i < dictionary.length; i++){
    let word = dictionary[i];
    for (let j = 0; j < word.length; j++){
      if (!letters.includes(word[j])){
        break;
      }
      if (j === word.length - 1){
        allWords.push(word)
      }
    }
  }
  return allWords
}
console.log(getWords(textByLine, 'RSTLNE'))


// What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties. // 

