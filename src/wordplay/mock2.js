var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n');

// What are all of the words that start with a “TH” and end with a “TH”?
// 1. loop textByLine
// 2. if the string startsWith "TH" and string endsWith "TH" push string to results array
// for ( let i = 0; i < textByLine.length; i++){
//   if ( textByLine[i].startsWith('TH') && textByLine[i].endsWith('TH')){
//     results.push(textByLine[i])
//   }
// }

// Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix.

// create results variable 
// loop through textByLine and check if each word startsWith prefix, is true push word to results, and return results

const wordsWithPrefix = (prefix) => {
  let results = []
  for (let i = 0; i < textByLine.length; i++){
    if( textByLine[i].startsWith(prefix)){
      results.push(textByLine[i])
    }
  }
  return results
}
// console.log(wordsWithPrefix('THREE'))

// Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.

// loop through each letter of the input string. if that letter equals 'a' increment count. return the count

const findAllLetterA = (word) => {
  let count = 0;
  let str = word.toLowerCase()
  for (let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      count++
    }
  }
return count
}
// console.log(findAllLetterA('THRAESACAOARAES'))

// Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.

// loop through the word, and check if the word for the letter given. if true increment count variable. then return count

const findThisLetter = (word, letter) => {
  let count = 0; 
  let str = word.toLowerCase()
  for (let i = 0; i < str.length; i++){

    if (str[i] === letter){
      count++
    }
  }
  return count
}
// goal to use startsWith to find a count of all substring
const findThisSubstring = (word, substring) => {
  let count = 0; 
  let str = word.toLowerCase()
  for (let i = 0; i < str.length; i++){
    // instead call startsWith on substring 
    if (str.startsWith(substring, i)){
      count++
    }
  }
  return count
}

console.log(findThisSubstring('THIRTEENTH', 'th'))