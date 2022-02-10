// -------------- What are all of the words containing UU?

function getAllWordsWithUU(str){
  var results = []
  for(var i = 0; i < str.length; i++){
    if(str[i].includes('UU')){
      results.push(str[i])
    }
  }
  return results
}

// -------------- What are all of the words containing an X and a Y and a Z? 
function getAllWordsWithXYZ(str){
  var results = []
    for(var i = 0; i < str.length; i++){
      if(str[i].includes('X') 
        && str[i].includes('Y') 
        && str[i].includes('Z')){
        results.push(str[i])
      }
  }
  return results
}

// -------------- What are all of the words containing a Q but not a U
function getAllWordsWithQButNotU(str){
  var results = []
    for(var i = 0; i < str.length; i++){
    if(str[i].includes('Q') && !str[i].includes('U')){
      results.push(str[i])
    }
  }
  return results
}

// ------------ What are all of the words that contain the word CAT and are exactly 5 letters long?
function getAllWordsWithCAT(str){
  var results = [];
  for (var i = 0; i < str.length; i++){
    // check for words with CAT
    // check for words no longer then 5
    if(str[i].includes('CAT') && str[i].length === 5){
      results.push(str[i])
    }
  }
  return results
}


// [ ] What are all of the words that have no E or A and are at least 15 letters long?
function getAllWordsWithoutEorA(str){
  var results = []
  for(var i = 0; i < str.length; i++){
    if(!str[i].includes('E') && !str[i].includes('A') && str[i].length >= 15){
      results.push(str[i])
    }
  }
  return results
}


// [ ] What are all of the words that have a B and an X and are less than 5 letters long?
function getAllWordsWithBandX(str){
  var results = [];
  for(var i = 0; i < str.length; i++){
    if(str[i].includes('B') && str[i].includes('X') && str[i].length < 5){
      results.push(str[i])
    }
  }
  return results
}

// [ ] What are all of the words that start and end with a Y?

function getAllWordsStartingAndEndingWithY(str){
  var results = [];
  for (var i = 0; i < str.length; i++){
    if(str[i][0] === 'Y' && str[i][str[i].length - 1] === 'Y'){
    results.push(str[i])   
    }
  }
  return results
}


// [ ] What are all of the words with no vowel and not even a Y?
const getAllWordsWithNoVowels = (words) => {
  var noVowels = []
  for (var i = 0; i < words.length; i++){
    if(!words[i].includes('A') 
    && !words[i].includes('E') 
    && !words[i].includes('I')
    && !words[i].includes('O')
    && !words[i].includes('U')
    && !words[i].includes('Y')){
      noVowels.push(words[i])

    }
  }
  return noVowels;
}

const getAllWordsWithNoVowels1 = (words) => {
    // // I figured out to do this with regex too  
  
  var noVowels1 = []
  for (var i = 0; i < words.length; i++){
    const vowels = /A|E|I|O|U|Y/gi;
    if(!words[i].match(vowels)){
      noVowels1.push(words[i])
    }
  }
  return noVowels1;
}

// [ ] What are all of the words that have all 5 vowels, in any order?
const getWordsWithVowels = (words) => {

  var hasVowels = []
  for (var i = 0; i < words.length; i++){
    if(words[i].includes('A') 
    && words[i].includes('E') 
    && words[i].includes('I')
    && words[i].includes('O')
    && words[i].includes('U')){
      hasVowels.push(words[i])
    }
  }
  return hasVowels;
}

// [ ] What are all of the words that have all 5 vowels, in alphabetical order?
function getVowelsForWord(str){
  var arr = [];
  for(var i = 0; i < str.length; i++){
    if(str[i].includes('A') 
    || str[i].includes('E') 
    || str[i].includes('I')
    || str[i].includes('O')
    || str[i].includes('U')){
      arr.push(str[i])
    }    
  }
  return arr;
}


const getWordsWithVowelsInAlphabeticalOrder = (words) => {

  var hasVowelsInAlphabeticalOrder = []
  var vowels = ['A', 'E', 'I', 'O', 'U']
  
  // what is the input => words
  // output => all words with vowels in order
  // iterate through words
  
  for(var i = 0; i < words.length; i++){
    // store getVowelsForWord
    var listOfVowels = getVowelsForWord(words[i]);
    // if word has getVowelsForWord = vowels 
    for(var j = 0; j < listOfVowels.length; j++){
      if( listOfVowels[j] !== vowels[j]){
        break;
      }
      // if checking last vowel 
      if( vowels[j] === 'U' ){
        // push to hasVowelsInAlphabeticalOrder   
        hasVowelsInAlphabeticalOrder.push(words[i])
      }
    }
  }
  return hasVowelsInAlphabeticalOrder;
}
  


// Setting up storage to use during a for loop, including counters and arrays
// [ ] How many words contain the substring "TYPE”?
const getSubstringTYPE = (words) => {

  var subStrCount = 0
  for(var i = 0; i < words.length; i++){
    let substr = 'TYPE';
    if (words[i].indexOf(substr) === 0){
      subStrCount++
    }
  }
  return subStrCount;
}

// [ ] Create and print an array containing all of the words that end in "GHTLY"
const getWordsWithGHTLY = (words) => {

  var wordsWithGHTLY = []
  for(var i = 0; i < words.length; i++){
    let str = 'GHTLY';
    if(words[i].includes(str))
    wordsWithGHTLY.push(words[i]);  
  }
  return wordsWithGHTLY
}

// [ ] What is the shortest word that contains all 5 vowels?
const getShortestWordWithVowels = (words) => {


  // var shortestWordWithVowels = hasVowels.sort((a, b) => a.length - b.length);
  // console.log('Shortest Word With Vowels: ', shortestWordWithVowels[0]);
  // Using for loop
  let getVowels = getWordsWithVowels(words)
  var shortest = getVowels[0];
  for( var i = 0; i < getVowels.length; i++){
    if(getVowels[i].length < shortest.length){
      shortest = getVowels[i];
    }
  }
  return shortest
}
  
// [ ] What is the longest word that contains no vowels?
const getLongestWordWithoutVowels = (words) => {
  let getWordsWithoutVowels = getAllWordsWithNoVowels1(words)

  var longestWordWithoutVowels = getWordsWithoutVowels.sort((a, b) => b.length - a.length);
  return longestWordWithoutVowels[0]
}

// [ ] Which of the letters Q, X, and Z is the least common?
function leastCommonLetter(str) {
  var q = 0;
  var x = 0;
  var z = 0;
  var arr = {}
  for (var i = 0; i < str.length; i++){
    if(str[i] === 'Q'){
      q++;
      arr[str[i]] = q
    }
    if(str[i] === 'X'){
      x++;
      arr[str[i]] = x

    }
    if(str[i] === 'Z'){
      z++;
      arr[str[i]] = z;
    }
  }

  let min = Math.min(...Object.values(arr))
  return Object.keys(arr).filter(key => arr[key]==min)
  
}


// // [ ] What is the longest palindrome?
function longestPalindrome(str) {
  var reverseStr = []
  for (var i = 0; i < str.length; i++){
    var splitStr = str[i].split('').reverse().join('');
    if(str[i].length > 0 && str[i] === splitStr){
      reverseStr.push(str[i])
    }
  }
  reverseStrSort = reverseStr.sort((a, b) => b.length - a.length);
  return reverseStrSort[0]
}

// // [ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

var letters = {
  A: true,
  B: true, 
  C: true,
  D: true, 
  E: true, 
  F: true,
  G: true, 
  H: true,
  I: true,
  J: true,
  K: true,
  L: true,
  M: true,
  N: true,
  O: true,
  P: true,
  Q: true,
  R: true,
  S: true,
  T: true,
  U: true,
  V: true,
  X: true,
  Y: true,
  Z: true,

}
const getWordsWithoutConsecutiveLetters = (words) => {

  // Set iteration for word list 
  for(var i = 0; i < words.length; i++){
    var word = words[i];
    // iterate through every letter in dictionary
    for ( var letter in letters){
      // check for double letters 
      
      if(word.includes(letter+letter)){
        letters[letter] = false;
      }
    }
  }
  for(var key in letters){

    if(letters[key] === true){
      return key
    }
  }
}

module.exports = {
  getAllWordsWithUU,
  getAllWordsWithXYZ,
  getAllWordsWithQButNotU,
  getAllWordsWithCAT,
  getAllWordsWithoutEorA,
  getAllWordsWithBandX,
  getAllWordsStartingAndEndingWithY,
  getAllWordsWithNoVowels,
  getAllWordsWithNoVowels1,
  getWordsWithVowels,
  getVowelsForWord,
  getWordsWithVowelsInAlphabeticalOrder,
  getSubstringTYPE,
  getWordsWithGHTLY,
  getShortestWordWithVowels,
  getLongestWordWithoutVowels,
  leastCommonLetter,
  longestPalindrome,
  getWordsWithoutConsecutiveLetters,

}