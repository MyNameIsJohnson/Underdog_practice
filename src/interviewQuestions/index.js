var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\r\n');
console.log(textByLine)

const {
  getWordsFromGivenTileLetters,
  removeWordsWithDuplicateLetters,
  replaceBlanks,
  getWordsFromGivenArray,
  getWordScore,
  calculateScoresForTiles,
} = require('./scrabble');

scores = {
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 1,
  "m": 3,
  "n": 1,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10
} 

console.log(getWordsFromGivenTileLetters(textByLine, 'SPCQEIU'))
console.log(calculateScoresForTiles(textByLine,'N_', scores));
// console.log(replaceBlanks('N_', scores))
// console.log(getWordScore('NY', 'NY', scores))
// console.log(getWordScore('WON', 'NO_', scores))
// console.log(replaceBlanks("N_", scores))
// console.log('getWordsFromGivenArray',getWordsFromGivenArray(textByLine, replaceBlanks("N_", scores)));