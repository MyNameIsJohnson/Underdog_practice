let fs = require("fs");
let wordlist = fs.readFileSync("./sowpods.txt", "utf-8");
let sowpods = wordlist.split("\r\n");

// console.log(sowpods);
let dict = [
  "BEACH",
  "MAN",
  "KEEPER",
  "SNOW",
  "SNOWMAN",
  "RAN",
  "ZOO",
  "ZOOKEEPER",
  "BALL",
  "BEACHBALL",
];

// 'B', 'EACH'
// 'BE', 'ACH'

const getAllCompoundWords = (dictionary) => {
  let compoundWords = [];
  // constant time look up with Set
  // vs
  // order n look up with array

  // converting dictionary to a new Set to search from
  const wordlist = new Set(dictionary);
  for (let word of wordlist) {
    // loop the word to check each letter
    // separate the word into firstPart and lastPart by separating first letter from the rest and so on ...
    // if word has firstPart and lastPart push to compoundWords
    // 'COM BAT'

    for (let i = 3; i < word.length - 2; i++) {
      let firstPart = word.substring(0, i);

      let lastPart = word.substring(i);
      if (wordlist.has(firstPart) && wordlist.has(lastPart)) {
        compoundWords.push(word);
        break;
      }
    }
  }
  return compoundWords;
};

console.log(getAllCompoundWords(sowpods));

// add constraint to only return word that firstPart and lastPart are 3 letters long

// ask Alex Marcy to go over memoization
