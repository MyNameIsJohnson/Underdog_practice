var fs = require('fs');
var sowpods = fs.readFileSync("./sowpods.txt", 'utf-8').split('\n');

let words = ['MASTER', 'AS', 'DOZEN', 'BLAST', 'MASK'];  

const getWordsWithSubstring = (wordsList, substring) =>{
  // Check each word in wordsList, if that includes substring push that word to storage array. Return storage array. 

  let wordsWithSubstring = [];
  for(let i = 0; i < wordsList.length; i++){
    let word = wordsList[i];
    // if(!word.includes(substring)){
    //   wordsList.splice(i, 1)
    // }

    if(word.includes(substring)){
      wordsWithSubstring.push(word)
    }
  }
  return wordsWithSubstring
}

console.log(getWordsWithSubstring(sowpods, 'AS'))