const fs = require("fs");
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
      word.includes("G") &&
      word.includes("") &&
      word.includes("C") &&
      word.includes("D") &&
      word.includes("E") &&
      word.includes("F") &&
      word.includes("A") &&
      word.includes("B") &&
      word.includes("C") &&
      word.includes("D") &&
      word.includes("E") &&
      word.includes("F")
    ) {
      alphabetChainWords.push(word);
    }
  }
  return alphabetChainWords;
};
console.log(getAlphabetChainWords(sowpods));

//     - For example, “FEEDBACK” is an answer to this question
// - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain and the words that can be made from that chain.
