const fs = require("fs");
const words = fs.readFileSync("./sowpods.txt", "utf-8").split("\r\n");
// console.log(words);

// Write a function that takes a string word as the first argument, a string letter as the second argument, and returns a count of how many times letter occurs in word.

const getCountOfLetter = (word, letter) => {
  // set a count variable equal 0
  let count = 0;
  // split the word to access as array
  word = word.toLowerCase();
  let splitWord = word.split("");
  // loop the word
  for (let i = 0; i < splitWord.length; i++) {
    // if letter equal the word at letter, increment count
    if (splitWord[i] === letter) {
      count++;
    }
  }
  return count;
};

// console.log(getCountOfLetter("Howeverasjdeeelkjelkej", "h"));

// Write a function that takes a string prefix as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).

const getAllPrefix = (prefix, data) => {
  // loop through words

  let allPrefix = data.filter((word) => word.startsWith(prefix));

  return allPrefix;
};

// console.log(getAllPrefix("ATT", words));

function countingValleys(steps, path) {
  // Write your code here
  // for every string = u increment count
  // for every string = d decrement count
  // if count is > 0 hiker didn't go through a valley, if < 0 hiker went thtough a valley
  let count = 0;
  let valley = 0;
  path = path.split("");
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      count++;
      if (count === 0) {
        valley++;
      }
    } else {
      count--;
    }
  }

  return valley;
}

console.log(countingValleys(8, "UDDDUDUU"));
