let fs = require('fs');
var babyName2020 = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8').split('\n');
var babyName1880 = fs.readFileSync("./baby_names_1880_short.txt", 'utf-8').split('\n');

const {
  getShortestBabyName,
  getLongestBabyName,
} = require('./babyNames');

console.log('getShortestBabyName', getShortestBabyName(babyName2020))
console.log('getLongestBabyName', getLongestBabyName(babyName2020))