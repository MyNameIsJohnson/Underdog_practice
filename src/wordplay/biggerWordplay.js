let fs = require("fs");
let wordlist = fs.readFileSync("./sowpods.txt", "utf-8");
let sowpods = wordlist.split("\r\n");
// Bigger Wordplay Questions

// The questions after this section are all real 60-minute interview questions from tech companies. Before you move on to those questions, we recommend confirming that you are comfortable independently breaking down, implementing, and debugging the questions below.

// If you aren’t, work with your mentor on more similarly-sized questions until you are consistently able to solve them independently, before moving on.

// [ ] What is the longest word that has no repeating letters?
// 1. Find words without repeated characters
// 2. Then check for longest word from words without repeated characters

// We have loop through sowpods and return wordsWithoutRepeatedCharacters
// Look at each character in the word, start with first character and if same character is found break and move on to next word
// If word has no repeat, add word to wordsWithoutRepeatedCharacters array
// return wordsWithoutRepeatedCharacters
const charDoesNotRepeats = (word) => {
  // assign a new Set of word to wordAsNewSet
  let wordAsNewSet = new Set(word);
  //  Uncomment the console log below to see the returned data
  // console.log(word, word.length, wordAsNewSet.size, wordAsNewSet)

  // return the size of wordAsNewSet equals to word length
  return wordAsNewSet.size === word.length;
};

// Now that we have a function that tells us whether the word has duplicates or not, we can pass that function into a function that filters out all the duplicate lettered words.
// What to expect: We want to take in the words and add a filter of charDoesNotRepeat, that helps us by only giving us back words that are true.

const removeWordsWithDuplicateLetters = (words) => {
  // We can return directly the words with the filered charDoesNotRepeat function.
  return words.filter(charDoesNotRepeats);
};

const getWordsWithoutRepeatedCharacters = (wordList) => {
  let wordsWithoutRepeatedCharacters = [];
  for (let i = 0; i < wordList.length; i++) {
    word = wordList[i].split("");
    let lettersRepeat = 0;
    // console.log(wordList[i]);
    for (let j = 0; j < word.length - 1; j++) {
      for (let k = j + 1; k < word.length; k++) {
        // console.log(j);
        // console.log(word[j]);
        // console.log(word[k]);
        // console.log("------");
        if (word[j] === word[k]) {
          lettersRepeat = 1;
        }
      }
    }
    if (lettersRepeat === 1) {
      wordsWithoutRepeatedCharacters.push(wordList[i]);
    }
  }

  return wordsWithoutRepeatedCharacters;
};

// console.log(getWordsWithoutRepeatedCharacters(sowpods));

// ___FEEDBACK___ Ask whether the question is asking about consecutive repeated characters or multiple instants of the same character

// Declare getLongestWordWithoutRepeatedCharacters function that take an array as perameter
// Set longest to equal to first word from wordsWithoutRepeatedCharacters
// Loop through wordsWithoutRepeatedCharacters
// If longest < word of wordsWithoutRepeatedCharacters
// longest equal to word
// return longest

const getLongestWordWithoutRepeatedCharacters = (wordList) => {
  let longestWords = [];
  wordList = getWordsWithoutRepeatedCharacters(wordList);
  let longest = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    if (word.length > longest.length) {
      longest = word;
      longestWords = [];
    }
    if (word.length >= longest.length) {
      longest = word;
      longestWords.push(word);
    }
  }
  if (longestWords !== "") {
    return longestWords;
  } else {
    return longest;
  }
};
// console.log(getLongestWordWithoutRepeatedCharacters(sowpods));

// [ ] What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example, “REFERRER” is an answer to this question, because it uses only 3 different letters: R, E, and F.

// first check if word is 8 letters or more
// add each letter of the word into an object
// if that object is greater then 3 in length if it is that is not the word we want to keep

// const letters = {
//   f: 1,
//   e: 1,
//   r: 1,
// };

// console.log(Object.keys(letters).length);

const getWordThatOnlyUseThreeLetters = (wordlist) => {
  let wordsThatOnlyUseThreeLetters = [];
  let lettersObj = {};
  for (let i = 0; i < wordlist.length; i++) {
    let word = wordlist[i].split("");
    for (j = 0; j < word.length; j++) {
      if (lettersObj[word[j]] === undefined) {
        lettersObj[word[j]] = 1;
      } else {
        lettersObj[word[j]]++;
      }
    }

    if (Object.keys(lettersObj).length <= 3 && wordlist[i].length >= 8) {
      wordsThatOnlyUseThreeLetters.push(wordlist[i]);
    }
    lettersObj = {};
  }

  return wordsThatOnlyUseThreeLetters;
};

// console.log(getWordThatOnlyUseThreeLetters(sowpods));

// --- Feedback --- Stay on track if stuck can always take a step back and adjust my approach with description and psudo coding

// [ ] What are all of the words that have at least 3 different double letters? For example, “BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E.

// to check each word letter and see if the that letter is equal to itself
// if it is make that letter in a letters obj equal to 1
// at end of loop check letters obj for keys with value = 1
// check if there are 3 or more keys with value = 1
// if true return that current word

const getWordThatOnlyUseThreeDoubleLetters = (wordlist) => {
  let wordsThatOnlyUseThreeLetters = [];
  let lettersObj = {};
  for (let i = 0; i < wordlist.length; i++) {
    let word = wordlist[i].split("");
    for (j = 0; j < word.length; j++) {
      if (lettersObj[word[j]] === undefined) {
        lettersObj[word[j]] = 1;
      } else {
        lettersObj[word[j]]++;
      }
    }
    console.log(Object.entries(lettersObj));
    if (Object.keys(lettersObj).length >= 3) {
      wordsThatOnlyUseThreeLetters.push(wordlist[i]);
    }
    lettersObj = {};
  }

  return wordsThatOnlyUseThreeLetters;
};

const getAllWordsWithDuplicateLetters = (wordList) => {
  wordList = getWordThatOnlyUseThreeDoubleLetters(wordList);
  return wordList;
};

// console.log(getAllWordsWithDuplicateLetters(sowpods));

// [ ] Write a function that takes a string `availableLetters` as an argument and returns an array of all of the words that can be made from only those letters. Letters can be re-used as many times as needed and can appear in any order. Not all of the letters in `availableLetters` have to be used.

const getWordsFromGivenLetters = (dictionary, availableLetters) => {
  const wordsFromGivenLetters = [];
  // split availableLetters
  let letters = availableLetters.split(""); // loop through dictionary
  // if word doesn't include availableLetters break out loop
  // push word into wordsFromGivenLetters
  for (let i = 0; i < dictionary.length; i++) {
    let word = new Set(dictionary[i]);
    let count = 0;
    let newWord = Array.from(word);

    // check each letter of word
    for (let j = 0; j < newWord.length; j++) {
      if (!letters.includes(newWord[j])) {
        count = 1;
      }
    }
    if (count === 0) {
      wordsFromGivenLetters.push(dictionary[i]);
    }
  }
  return wordsFromGivenLetters;
};

// try using regex to solve

// console.log(
//   "getWordsFromGivenLetters",
//   getWordsFromGivenLetters(sowpods, "JORDEN")
// );

// [ ] What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.

let dict = new Set([
  "BEACH",
  "MAN",
  "KEEPER",
  "SNOW",
  "SNOWMAN",
  "RAN",
  "ZOO",
  "ZOOKEEPER",
  "BALL",
]);
let memo = new Object();

function backtracking(depth, s, wordSet, sub) {
  let n = s.length;
  // accept
  if (depth === n) {
    return true;
  }

  // memoization
  if (memo[sub] !== undefined) {
    // memo
    console.log("undef");
    return memo[sub];
  }

  for (let i = depth; i < n; i++) {
    let str = s.substring(depth, i + 1); // substring[depth, i]
    console.log(str);

    if (wordSet.has(str)) {
      if (backtracking(i + 1, s, wordSet, str)) {
        memo[str] = true; // memo
        return true;
      }
    }
  }

  memo[sub] = false; // memo
  return false;
}

const getWord = (list) => {
  let validCompoundWords = [];

  for (let word of list) {
    if (backtracking(0, word, list, word[0])) {
      validCompoundWords.push(word);
    }
  }
  return validCompoundWords;
};

// INPUT: [
//   'BEACH',   'MAN',
//   'KEEPER',  'SNOW',
//   'SNOWMAN', 'RAN',
//   'BEACHBALL', 'ZOO',
//   'ZOOKEEPER', 'BALL'
// ]
// output: ['SNOWMAN', 'BEACHBALL', 'ZOOKEEPER]

// const getSuffix = (dictionary) => {
//   console.log("getting suffix");

//   let suffix = [];

//   for (let i = 0; i < dictionary.length; i++) {
//     let word = dictionary[i];

//     for (let j = i + 1; j < dictionary.length; j++) {
//       if (dictionary[j].endsWith(word)) {
//         suffix.push(word);
//       }
//     }
//   }
//   return suffix;
// };

const getAllCompoundWords = (dictionary, s) => {
  console.log("getting all compound words");

  let allCompoundWords = [];
  let prefix = getPrefix(dictionary);
  let suffix = getSuffix(dictionary);
  for (let i = 0; i < dictionary.length; i++) {
    console.log("=====first loop");
    let word = dictionary[i];
    for (let j = 0; j < prefix.length; j++) {
      console.log("second loop");

      for (let k = 0; k < suffix.length; k++) {
        console.log("third loop");

        if (word === prefix[j].concat(suffix[k])) {
          allCompoundWords.push(word);
        }
      }
    }
  }
  return allCompoundWords;
};

// console.log(getPrefix(list));
// console.log(getSuffix(list));
// console.log(getAllCompoundWords(list));

// [ ] Finding alphabet chains:
//     - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
//         - For example, “FEEDBACK” is an answer to this question

//     - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.
