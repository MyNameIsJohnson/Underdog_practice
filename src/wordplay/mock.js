// Write a function that takes as an argument a string of all letters that can be used, and returns an array of all words that can be made from those letters. You can use those letters as many times as you want, for example if the input string is “ABCD”, “BAD” and “DAD” should both be in the returned array.
 
// ==== Mock with Jessica ==== 2/20
// function findAllWordsFromGivenLetters param of stringOfLetters 
const findAllWordsFromGivenLetters = (sowpods, stringOfLetters) =>{
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
  // return allWordsFromGivenLetters
  return allWordsFromGivenLetters;
}

module.exports = {
  findAllWordsFromGivenLetters,
}
