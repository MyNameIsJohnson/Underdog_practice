const fs = require("fs");
// for windows
// const sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\r\n");

// for mac
const sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\n");
const text = fs.readFileSync("./sowpods.txt", "utf-8");

// [ ] What are all of the words containing UU?

let allUUWords = [];
for (let i = 0; i < sowpods.length; i++) {
  if (sowpods[i].includes("UU")) {
    allUUWords.push(sowpods[i]);
  }
}
// console.log(allUUWords);

// [ ] What are all of the words containing an X and a Y and a Z?
// Need to write a func that checks 3 conditionals. Loop through list checking each word and add to allWordsWithXYZ the word f it includes X,Y and Z.
let allWordsWithXYZ = [];
for (let word of sowpods) {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    allWordsWithXYZ.push(word);
  }
}
// console.log(allWordsWithXYZ);

// [ ] What are all of the words containing a Q but not a U?

// loop through dict and isolate each word to be checked for Q but not U
// if word has Q and does not have U
// push that word into array wordsWithQButNotU
//return wordsWithQButNotU

// ====> practice this first: ask edge cases, because understanding what data type I'm using will help

// How is this being used *

const getWordsWithQButNotU = (dictionary) => {
  let wordsWithQButNotU = [];
  for (let word of dictionary) {
    console.log(word);
    if (word.includes("Q") && !word.includes("U")) {
      wordsWithQButNotU.push(word);
    }
  }
  return wordsWithQButNotU;
};

let dict = ["UMBRELLA", "Q-TIP", "READY", "QUITB"];
// console.log("getWordsWithQButNotU", getWordsWithQButNotU(dict));
// console.log("empty array", getWordsWithQButNotU([]));
// console.log("getWordsWithQButNotU", getWordsWithQButNotU([""]));
// console.log("getWordsWithQButNotU", getWordsWithQButNotU([""]));

// [ ] What are all of the words that contain the word CAT and are exactly 5 letters long?

// Does CAT have to be consecitive? Can they be in random order? Is the dictionary a list of strings? Is the dictionary cap sentsitive?

// We have to check if words from the dictionary contains CAT and is only 5 letters. We want to loop through the dictionary and extract each word in the dictionary to run these conditionals. If the word being checked meets the conditional, push the word into an empty array to be returned when function is called.

const assertEqualsAllWordsWithCATand5Letters = (actual, expected, testName) => {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log("Passed " + testName);
    return actual;
  } else {
    console.log(
      "Failed [" + testName + "]\n Expected: " + expected + " but got " + actual
    );
    return expected;
  }
};

let list = [
  "AA",
  "AB",
  "ABA",
  "ABAC",
  "ABACA",
  "ABB",
  "ABBA",
  "ACCAT",
  "AD",
  "ADD",
  "BA",
  "BAA",
  "BABA",
  "BAC",
  "BACCA",
  "BAD",
  "CAA",
  "CAB",
  "CATBA",
  "CACA",
  "CAD",
  "DA",
  "DAB",
  "DABBA",
  "DAD",
  "DADA",
];

let expected = ["CATBA", "ACCAT"];

const getAllWordsWithCATand5Letters = (dictionary) => {
  let wordsWithCATand5Letters = [];
  for (let i = 0; i < dictionary.length; i++) {
    let word = dictionary[i];
    if (word.length === 5 && word.includes("CAT")) {
      wordsWithCATand5Letters.push(word);
    }
  }
  return wordsWithCATand5Letters;
};
expected.sort();

console.log(
  assertEqualsAllWordsWithCATand5Letters(
    getAllWordsWithCATand5Letters(list),
    expected,
    "getAllWordsWithCATand5Letters"
  )
);

// [ ] What are all of the words that have no E or A and are at least 15 letters long?
// [ ] What are all of the words that have a B and an X and are less than 5 letters long?
// [ ] What are all of the words that both start and end with a Y?
// [ ] What are all of the words with no vowel and not even a Y?
// [ ] What are all of the words that have all 5 vowels, in any order?
// [ ] What are all of the words that have all 5 vowels, in alphabetical order?

// Setting up storage to use during a for loop, including counters and arrays

// [ ] How many words contain the substring "TYPE”?
// [ ] Create and print an array containing all of the words that end in "GHTLY"
// [ ] What is the shortest word that contains all 5 vowels?
// loop through wordlist, check if word includes vowels, add word to list, sort list and return first index
const getShortestWordWithAllVowels = (wordlist) => {
  let list = [];
  for (let word of wordlist) {
    if (
      word.includes("A") &&
      word.includes("E") &&
      word.includes("I") &&
      word.includes("O") &&
      word.includes("U")
    ) {
      list.push(word);
    }
  }
  list.sort();
  return list[0];
};
// console.log(getShortestWordWithAllVowels(sowpods));

// [ ] What is the longest word that contains no vowels?
const getLongestWordWithNoVowels = (wordlist) => {
  let list = [];
  for (let word of wordlist) {
    if (
      !word.includes("A") &&
      !word.includes("E") &&
      !word.includes("I") &&
      !word.includes("O") &&
      !word.includes("U")
    ) {
      list.push(word);
    }
  }
  list.sort((a, b) => {
    return b.length - a.length;
  });
  return list[0];
};
// console.log(getLongestWordWithNoVowels(sowpods));

// [ ] Which of the letters Q, X, and Z is the least common?

function leastCommonLetter(str) {
  var q = 0;
  var x = 0;
  var z = 0;
  var arr = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "Q") {
      q++;
      arr[str[i]] = q;
    }
    if (str[i] === "X") {
      x++;
      arr[str[i]] = x;
    }
    if (str[i] === "Z") {
      z++;
      arr[str[i]] = z;
    }
  }

  let min = Math.min(...Object.values(arr));
  return Object.keys(arr).filter((key) => arr[key] == min);
}

// console.log(leastCommonLetter(text));
// [ ] What is the longest palindrome?
// [ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
