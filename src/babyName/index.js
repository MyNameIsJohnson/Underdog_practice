// let fs = require('fs');
// var babyName2020 = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8').split('\n');
// var babyName1880 = fs.readFileSync("./baby_names_1880_short.txt", 'utf-8').split('\n');
// var text = fs.readFileSync("./sowpods.txt", 'utf-8');
// var textByLine = text.split('\n')

// const {
//   getShortestBabyName,
//   getLongestBabyName,
//   getScrabbleWordWithArray,
//   getScrabbleWordsWithSet,
//   getExecutionTime,
//   getAllPopularNamesIn1880And2020,
//   getEveryNameFromBothYearsStartingWithLetter,
// } = require('./babyNames');

// // console.log('getShortestBabyName', getShortestBabyName(babyName2020))
// // console.log('getLongestBabyName', getLongestBabyName(babyName2020));
// // // const start = Date.now()
// // // console.log('getScrabbleWordFromBabyName', getScrabbleWordWithArray(babyName2020, textByLine));
// // // const duration = Date.now() - start
// // // console.log(duration)

// // // const startSet = Date.now()
// // // console.log('getScrabbleWordsWithSet', getScrabbleWordsWithSet(babyName2020, textSet)) 
// // // const durationSet = Date.now() - startSet
// // // console.log(durationSet)
// let result = getExecutionTime('getScrabbleWordsWithSet', () => getScrabbleWordsWithSet(babyName2020, textByLine));

// console.log('Variable call of getScrabbleWordsWithSet',result)
// // getExecutionTime('getScrabbleWordsWithSet', () => getScrabbleWordsWithSet(babyName2020, textByLine));

// getExecutionTime('getScrabbleWordWithArray', () => getScrabbleWordWithArray(babyName2020, textByLine));
// getExecutionTime('getAllPopularNamesIn1880And2020', () => getAllPopularNamesIn1880And2020(babyName1880, babyName2020));
// // getExecutionTime('getEveryNameFromBothYearsStartingWithLetter',getEveryNameFromBothYearsStartingWithLetter(babyName1880, babyName2020, 'W'));

