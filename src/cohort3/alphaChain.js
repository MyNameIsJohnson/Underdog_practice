const fs = require("fs");
const { get } = require("http");
// for windows
const sowpods = fs.readFileSync("./sowpods.txt", "utf-8").split("\r\n");

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// starting at a interate through chains by indeces
const doesChainExist = (chain) => {
  let splitChain = chain.split("");
  for (let i = 0; i < sowpods.length; i++) {
    let word = sowpods[i];
    // inner loop on splitchain
    for (let j = 0; j < splitChain.length; j++) {
      if (!word.includes(splitChain[j])) {
        break;
      }
      if (j === splitChain.length - 1) {
        return true;
      }
    }
  }
  return false;
};

// console.log(doesChainExist("ABCDEF"));
let longestChain = "";
for (let i = 0; i < alphabet.length; i++) {
  for (let j = i + 1; j < alphabet.length; j++) {
    if (doesChainExist(alphabet.slice(i, j))) {
      if (longestChain.length < alphabet.slice(i, j).length) {
        longestChain = alphabet.slice(i, j);
      }
    }
  }
}

let alphabetChain = [];
let splitChain = longestChain.split("");
for (let i = 0; i < sowpods.length; i++) {
  let word = sowpods[i];
  for (let j = 0; j < splitChain.length; j++) {
    if (!word.includes(splitChain[j])) {
      break;
    }
    if (j === splitChain.length - 1) {
      alphabetChain.push(word);
    }
  }
}

console.log(alphabetChain);
