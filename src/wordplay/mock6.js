// Given a list of words find all the words with all 5 vowels in alphabetical order

// I would have loop through the list of words, and for each word check the letter if it is a vowel. If it is not a vowel remove that letter and continue the loop. Then check if the word is 5 letters in length if it is check it matches a variable of vowels. If that is true push that currect word to wordsWithAllVowels array.

const wordlist = [
  "PDS",
  "HOWAWESOME",
  "AEIOU",
  "TSTFRAEIOU",
  "FORAEFIAOAU",
  "THASTBEWIOU",
];

// Output: ['AEIOU', 'TESTFORAEIOU']

function getVowelsForWord(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (
      str[i].includes("A") ||
      str[i].includes("E") ||
      str[i].includes("I") ||
      str[i].includes("O") ||
      str[i].includes("U")
    ) {
      arr.push(str[i]);
    }
  }
  return arr;
}

const getWordsWithVowelsInAlphabeticalOrder = (words) => {
  var hasVowelsInAlphabeticalOrder = [];
  var vowels = ["A", "E", "I", "O", "U"];

  // what is the input => words
  // output => all words with vowels in order
  // iterate through words

  for (var i = 0; i < words.length; i++) {
    // store getVowelsForWord
    var word = getVowelsForWord(words[i]);
    console.log(word);
    // if word has getVowelsForWord = vowels
    for (var j = 0; j < word.length; j++) {
      if (word[j] !== vowels[j]) {
        break;
      }
      // if checking last vowel
      if (vowels[j] === "U") {
        // push to hasVowelsInAlphabeticalOrder
        hasVowelsInAlphabeticalOrder.push(words[i]);
      }
    }
  }
  return hasVowelsInAlphabeticalOrder;
};

console.log(getWordsWithVowelsInAlphabeticalOrder(wordlist));
