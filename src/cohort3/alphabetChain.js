const fs = require("fs");
const { get } = require("http");
// for windows
const sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\r\n");

// for mac
// const sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\n");
// const text = fs.readFileSync("./sowpods.txt", "utf-8");

// [ ] Finding alphabet chains:
// - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?

// input: string
// output: array

// loop thtough dictionary
// create empty array for alphabetChainWords
// check if the word includes letters A, B, C, D, E and F, then
// push that word to alphabetChainWords
// return alphabetChainWords
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getAlphabetChainWords = (dictionary) => {
  const alphabetChainWords = [];
  for (let word of dictionary) {
    if (
      word.includes("A") &&
      word.includes("B") &&
      word.includes("C") &&
      word.includes("D") &&
      word.includes("E") &&
      word.includes("F") &&
      word.includes("G")
    ) {
      alphabetChainWords.push(word);
    }
  }
  return alphabetChainWords;
};

//     - For example, “FEEDBACK” is an answer to this question
// - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain and the words that can be made from that chain.

// helper function
const doesChainExist = (chainOfletters, word) => {
  // here need to check to alphabet
  let splitChainOfLetters = chainOfletters.split("");
  // for (let word of dictionary) {
  for (let i = 0; i < splitChainOfLetters.length; i++) {
    if (!word.includes(splitChainOfLetters[i])) {
      break;
    }
    if (i === splitChainOfLetters.length - 1) {
      return true;
    }
    // }
  }
  return false;
};

console.log(doesChainExist("ABCDEG", "FEEDBACK"));

const getLongestAlphabetChain = (alphabetChain, dictionary) => {
  // need to search dictionary for longest chain
  let longestWordChain = [];
  let longest = [];

  for (let i = 0; i < alphabetChain.length; i++) {
    // using i to start add inner loop to check for chain
    for (let j = i + 1; j < alphabetChain.length; j++) {
      // if chain of letters in i and j form word
      // if it does continue
      longestWordChain.push(alphabetChain.slice(i, j));
    }
  }

  for (let word of dictionary) {
    for (let i = 0; i < longestWordChain.length; i++) {
      // console.log(doesChainExist(longestWordChain[i], word));
      if (doesChainExist(longestWordChain[i], word)) {
        longest.push(longestWordChain[i]);
        // look at later and refactor, may not need last function
      }
    }
  }
  longest.sort((a, b) => {
    return b.length - a.length;
  });

  return longest[0];
};

console.log(getLongestAlphabetChain(alphabet, sowpods));
const getAlphabetWords = (alphabetletter, dictionary) => {
  const alphabetChainWords = [];
  let chain = getLongestAlphabetChain(alphabetletter, dictionary);
  console.log(chain);
  for (let word of dictionary) {
    for (let i = 0; i < chain.length; i++) {
      if (word.includes(chain[i])) {
        alphabetChainWords.push(word);
      }
    }
  }
  return alphabetChainWords;
};
// console.log(getAlphabetWords(alphabet, sowpods));
