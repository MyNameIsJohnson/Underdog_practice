// There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

let fs = require("fs");
var babyName2020 = fs
  .readFileSync("./baby_names_2020_short.txt", "utf-8")
  .split("\r\n");
var babyName1880 = fs
  .readFileSync("./baby_names_1880_short.txt", "utf-8")
  .split("\r\n");
var text = fs.readFileSync("./sowpods.txt", "utf-8");
var textByLine = text.split("\r\n");

console.log(Array.isArray(textByLine));
// loop through babyName2020, grab each name and reverse that name, then check if that name is included in sowpods. If so add name to return array.

const getReverseBabyNameThatIsAValidScrabbleWord = (babynames) => {
  let reverseBabyNameThatIsAValidScrabbleWord = [];
  let nameSet = new Set(textByLine);
  for (let name of babynames) {
    if (nameSet.has(name.split("").reverse().join("").toUpperCase())) {
      reverseBabyNameThatIsAValidScrabbleWord.push(name);
    }
  }
  return reverseBabyNameThatIsAValidScrabbleWord;
};
console.log(getReverseBabyNameThatIsAValidScrabbleWord(babyName2020));
// console.log(textByLine.includes("MAIL"));
