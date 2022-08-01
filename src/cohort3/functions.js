let fs = require("fs");
let sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\n");

// [ ] Write a function that takes a string `substring` as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).

// We need check dictionary for words that contain or includes substring. When we find words in the dictionary that has the substring, we want to push that word into a list and return that list.

// wordsWithSubstring = [];
// for in loop, word in dictionary
// if word includes or contains substring
// push word into wordsWithSubstring
// return wordsWithSubstring

const getWordsWithSubstring = (dictionary, substring) => {
  let wordsWithSubstring = [];
  for (let word of dictionary) {
    if (word.includes(substring)) {
      wordsWithSubstring.push(word);
    }
  }
  return wordsWithSubstring;
};

// console.log(getWordsWithSubstring(sowpods, 'BASE'))

// [ ] Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).

// Loop through dictionary search for words that start with the prefix
// If the word starts with the prefix,
// push that word into wordsWithPrefix
// return wordsWithPrefix

const getWordsWithPrefix = (dictionary, prefix) => {
  let wordsWithPrefix = [];
  for (let word of dictionary) {
    if (word.startsWith(prefix)) {
      wordsWithPrefix.push(word);
    }
  }
  return wordsWithPrefix;
};

// console.log(getWordsWithPrefix(sowpods, 'PER'))

// [ ] Write a function that takes a string `prefix` as the first argument, a string `suffix` as the second argument, and an integer `length` as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.

// Looping through the dictionary
// Look for words that starts with prefix && ends with suffix && is 'x' length long
// if that word meets these conditions,
// push word into wordsWithPrefixSuffixAndLength
// return wordsWithPrefixSuffixAndLength

const getWordsWithPrefixSuffixAndLength = (prefix, suffix, length) => {
  let wordsWithPrefixSuffixAndLength = [];
  for (let word of sowpods) {
    if (
      word.startsWith(prefix) &&
      word.endsWith(suffix) &&
      word.length === length
    ) {
      wordsWithPrefixSuffixAndLength.push(word);
    }
  }
  return wordsWithPrefixSuffixAndLength;
};

// console.log(getWordsWithPrefixSuffixAndLength( 'PRO', 'TION', 15))

// [ ] Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.

// Loop through the string, and check each letter.
// if letter equals to 'A'
// count increments
//return count

const getLetterCount = (word, character) => {
  let count = 0;
  word = word.toUpperCase();
  let splitWord = word.split("");

  for (let letter of splitWord) {
    if (letter === character) {
      count++;
    }
  }
  return count;
};

// console.log(getLetterCount("However", "E"));

// [ ] Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.

// [ ] Write a function that takes a string `phrase` and returns a dictionary contains counts of how many times every character appears in `phrase`.

const getAllLettersCount = (phrase) => {
  let countedCharacters = {};
  phrase = phrase.replaceAll(" ", "");
  for (let letter of phrase) {
    if (countedCharacters[letter] === undefined) {
      countedCharacters[letter] = 1;
    } else {
      countedCharacters[letter]++;
    }
  }
  return countedCharacters;
};
console.log(getAllLettersCount("Count each letter in this phrase"));
