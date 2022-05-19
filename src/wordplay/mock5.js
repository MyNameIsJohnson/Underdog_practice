var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')

// The question: What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.

// We need to search the dictionary of words to search for words that don't include the letters AEIOSHRTN. We will start by looking at each individual word in the dictionary and check if each letter is a letter from the letters given. If it does, that is not the word we want. If the word does not include any of the letters given, we want to add that word to a list and return that list. 

// declare a function that takes in a dictionary and a string
const getAllWordsWithoutLettersFromGivenString = (dictionary, string) => {
  // declare an empty array for all words without given letters
  let allWordsWithoutLettersFromGivenString = [];
  // assign letters to equal the split string 
  let letters = string.split('');
  // loop through the dictionary length in order to look at individual word 
  for(let i = 0; i < dictionary.length; i++){
    // assign word to equal dictionary at index
    let word = dictionary[i];
    // create inner loop of word length in order to look at each letter in the word
    for(let j = 0; j < word.length; j++){
      // if letters include word at index, break from inner loop. That is because if that word has the letter, this isn't the word we want 
      if(letters.includes(word[j])){
        break;
      }
      // if inner loop index is equal to last letter of word, push that word to empty array of all words without given letters. So by the time we have checked all the letters in the word and the loop didn't have to break, that means the word didn't include the letters searching for. Therefore, that is the word we want to keep.
      if(j === word.length -1){
        allWordsWithoutLettersFromGivenString.push(word);
      }
    }
  }
  return allWordsWithoutLettersFromGivenString
}

// Edge case: Return all the words with the given string without repeated letters 

// To solve this we need to check each letter in the word and remove repeated characters. To do this we can check the length of each word and compare it to the length of that word as a new Set. Using the new Set method gives us back an object of unique letters in that word. So if the word is longer then the new Set of that word, that word is not what we want. Which would return false. If the word and new Set is the same length, that word is true.

// Write a function that takes a word as a parameter
const charDoesNotRepeats = (word) => {
  // assign a new Set of word to wordAsNewSet
  let wordAsNewSet = new Set(word);
  //  Uncomment the console log below to see the returned data
  // console.log(word, word.length, wordAsNewSet.size, wordAsNewSet)

  // return the size of wordAsNewSet equals to word length
  return wordAsNewSet.size === word.length
}

// Now that we have a function that tells us whether the word has duplicates or not, we can pass that function into a function that filters out all the duplicate lettered words. 
// What to expect: We want to take in the words and add a filter of charDoesNotRepeat, that helps us by only giving us back words that are true.

const removeWordsWithDuplicateLetters = (words) => {
  // We can return directly the words with the filered charDoesNotRepeat function. 
  return words.filter(charDoesNotRepeats)
}

// What is the longest word that has no repeating letters?

// Questions: 1. What type of data do we want the longest word returned to be? Array or string? 

// We need to take in all the words returned to removeWordsWithDuplicateLetters. With that list of words we can then check each word length, by setting the first word in the list as the longest. Then iterate through the rest of the words and compare its length to the longest word. If the word is longer then the longest word, then that word becomes the longest word. 

// Edge case: How do we want to handle ties?
 
// INPUT: ['BLUDY', 'BUCK', 'BUD','BUG', 'BULGY','BULK', 'BULKY','BUM', 'BUMF', 'BUMP', 'BUMPY', 'BUY','BY', 'CLUB', 'CLUMP', CLUMPY', 'DUMBLY', ... ]
// OUTPUT: 'CLUMPY' => string
// OUTPUT: ['CLUMPY', 'DUMBLY', ...] => array handled ties

// Create a function getLongestWordWithoutRepeatedLetters that takes words as a parameter. 
const getLongestWordWithoutRepeatedLetters = (wordsList) => {
  // Assign words to equal removeWordsWithDuplicateLetters(words). 
  const words = removeWordsWithDuplicateLetters(wordsList);
  // Declare longestWordWithoutRepeatedLetters equal to words[0]. 
  let longestWordWithoutRepeatedLetters = words[0];
  // Declare empty array to store words of same length
  let listOfLongestWordsWithoutRepeatedLetters = [];
  // For loop through words length, iterate words at index and incremente. 
  for(let i = 0; i < words.length; i++){
    // Declare word equal to words[i]
    let word = words[i];
    // if word length is greater then longestWordWithoutRepeatedLetters length
    if(word.length > longestWordWithoutRepeatedLetters.length){
      // Clear listOfLongestWordsWithoutRepeatedLetters
      listOfLongestWordsWithoutRepeatedLetters = []
      // push word to listOfLongestWordsWithoutRepeatedLetters
      listOfLongestWordsWithoutRepeatedLetters.push(word)
      // longestWordWithoutRepeatedLetters equals word
      longestWordWithoutRepeatedLetters = word;
      // 
    }
    // Handle ties
    if(word.length === longestWordWithoutRepeatedLetters.length){
      listOfLongestWordsWithoutRepeatedLetters.push(word)
    }
  }
  // return longestWordWithoutRepeatedLetters
  return listOfLongestWordsWithoutRepeatedLetters
}



// console.log('getAllWordsWithoutLettersFromGivenString', getAllWordsWithoutLettersFromGivenString(textByLine, 'AEIOSHRTN'));

// console.log('removeWordsWithDuplicateLetters', removeWordsWithDuplicateLetters(getAllWordsWithoutLettersFromGivenString(textByLine, 'AEIOSHRTN')));

console.log('getLongestWordWithoutRepeatedLetters', getLongestWordWithoutRepeatedLetters(removeWordsWithDuplicateLetters(getAllWordsWithoutLettersFromGivenString(textByLine, 'AEIOSHRTN'))));