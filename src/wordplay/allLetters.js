var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')

// What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

// test array: ['REST', 'SET', 'TEST', 'NET', 'STRESS'];
// Input: “RSTLNE”;
// We should write code that returns the expected output 
// 1. Set an empty array to store and return the expected output
// 2. We need to split the letters given into an array
// 3. We need to loop through array of words
// 4. Set word to equal words at index
// 5. Create inner loop of word
// 6. Now check if letters does not include word at inner index, if so break from loop 
// 7. Check if iteration is at last index of word, if so push word to storage array
// 8. Return storage array

let words = ['REST', 'SET', 'TEST', 'NET', 'STRESS', 'GET', 'JET', 'MET'];

const getAllWordsFromLetters = (words, letters) => {
  let allWordsFromLetters = [];
  let lettersArray = letters.split('');
  for(let word of words){
    for(let i = 0; i < word.length; i++){
      if(!lettersArray.includes(word[i])){
        break;
      }
      if(i === word.length - 1){
        allWordsFromLetters.push(word);
      }
    }
  }
  return allWordsFromLetters
}

console.log(getAllWordsFromLetters(words, 'RSTLNE'))
