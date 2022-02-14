var fs = require('fs');
var countries = fs.readFileSync("./countries.txt", 'utf-8').split('\n');
console.log(typeof countries)

const { 
  getCountriesWithUnited, 
  getCountriesBeginningAndEndingWithVowel, 
  getCountriesWithMoreThan50PercentVowels, 
  getCountriesWithOtherCountryNames,
  getShortestCountry,
  getCountryWithOnlyOneVowel 
} = require('./countries');



console.log('getCountriesWithUnited', getCountriesWithUnited(countries))
console.log('getCountriesBeginningAndEndingWithVowel', getCountriesBeginningAndEndingWithVowel(countries))
console.log('getCountriesWithMoreThan50PercentVowels', getCountriesWithMoreThan50PercentVowels(countries));
console.log('getShortestCountry', getShortestCountry(countries))
console.log('getCountryWithOnlyOneVowel', getCountryWithOnlyOneVowel(countries))
console.log('getCountriesWithOtherCountryNames', getCountriesWithOtherCountryNames(countries))


