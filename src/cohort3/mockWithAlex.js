let fs = require("fs");
let wordlist = fs.readFileSync("./sowpods.txt", "utf-8");
let sowpods = wordlist.split("\r\n");

//What are all of the words that contain the word CAT and are exactly 5 letters long?

// loop the dictionary
// set storage for allWordsWithCATAnd5LettersLong
// so if the word in dictionary includes CAT and is 5 letter long,
// push the word into allWordsWithCATAnd5LettersLong

const getAllWordsWithCATAnd5LettersLong = (dictionary) => {
  let allWordsWithCATAnd5LettersLong = [];

  for (let item in dictionary) {
    word = dictionary[item].toUpperCase();
    if (word.includes("CAT") && word.length === 5) {
      allWordsWithCATAnd5LettersLong.push(word);
    }
  }
  return allWordsWithCATAnd5LettersLong;
};

// console.log(getAllWordsWithCATAnd5LettersLong(sowpods));

// What is the longest word that contains no vowels?

// set longestWord to empty array
// loop through dictionary
// if word does not include any vowels,
// push to array
// sort array by descending order
// return first index in array

const getAllWordsWithoutVowels = (dictionary) => {
  let wordsWithoutVowels = [];
  for (let word of dictionary) {
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U") &&
      word !== ""
    ) {
      wordsWithoutVowels.push(word);
    }
  }
  let longestWord = wordsWithoutVowels.sort((a, b) => {
    return b.length - a.length;
  });
  return longestWord[longestWord.length - 1];
};

console.log(getAllWordsWithoutVowels(sowpods));
