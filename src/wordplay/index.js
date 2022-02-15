var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')

const { getAllWordsWithUU,
  getAllWordsWithXYZ,
  getAllWordsWithQButNotU,
  getAllWordsWithCAT,
  getAllWordsWithoutEorA,
  getAllWordsWithBandX,
  getAllWordsStartingAndEndingWithY,
  getAllWordsWithNoVowels,
  getWordsWithVowels,
  getAllWordsWithNoVowels1,
  getWordsWithVowelsInAlphabeticalOrder,
  getSubstringTYPE,
  getWordsWithGHTLY,
  getShortestWordWithVowels,
  getLongestWordWithoutVowels,
  leastCommonLetter,
  longestPalindrome,
  getWordsWithoutConsecutiveLetters, } = require('./wordplay');

console.log("getAllWordsWithUU", getAllWordsWithUU(textByLine));
console.log("getAllWordsWithXYZ", getAllWordsWithXYZ(textByLine));
console.log("getAllWordsWithQButNotU", getAllWordsWithQButNotU(textByLine));
console.log("getAllWordsWithCAT", getAllWordsWithCAT(textByLine));
console.log("getAllWordsWithoutEorA",getAllWordsWithoutEorA(textByLine));
console.log("getAllWordsWithBandX",getAllWordsWithBandX(textByLine));
console.log("getAllWordsStartingAndEndingWithY",getAllWordsStartingAndEndingWithY(textByLine));
console.log("noVowels",getAllWordsWithNoVowels(textByLine));
console.log("noVowels1",getAllWordsWithNoVowels1(textByLine));
console.log("hasVowels",getWordsWithVowels(textByLine));
console.log("hasVowelsInAlphabeticalOrder",getWordsWithVowelsInAlphabeticalOrder(textByLine));
console.log('Number of Words with substring "TYPE": ', getSubstringTYPE(textByLine));
console.log('Words With "GHTLY": ', getWordsWithGHTLY(textByLine));
console.log('Using for loop for shortest word with vowels', getShortestWordWithVowels(textByLine));
console.log('longestWordWithoutVowels: ', getLongestWordWithoutVowels(textByLine));
console.log('The least Common Letter out of "Q", "X" and "Y", is: ', leastCommonLetter(text));
console.log('longest Palindrome: ', longestPalindrome(textByLine));
console.log('Words without consecutive letters: ', getWordsWithoutConsecutiveLetters(textByLine));

