var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n');

const {
  getWordsFromGivenLetters,
  removeWordsWithDuplicateLetters,
} = require('./scrabble');

console.log(removeWordsWithDuplicateLetters(getWordsFromGivenLetters(textByLine, 'SPCQEIU')))

