let vowels = ['A', 'E', 'I', 'O', 'U'];

// [ ] What are all of the countries that have “United” in the name?

const getCountriesWithUnited = (countries) => {
  let countriesWithUnited = [];

  // Iterate countries 
  for ( let i = 0; i < countries.length; i++ ){
    // Check if country includes "United"
    if (countries[i].includes("United") ){
      // Push country to empty array
      countriesWithUnited.push(countries[i]);
    }
  }
  // return country array
  return countriesWithUnited;
}



// [ ] What countries both begin and end with a vowel?
let lowerCase = vowels.map(element => { return element.toLowerCase()});

const getCountriesBeginningAndEndingWithVowel = (countries) => {
  let countriesBeginningAndEndingWithVowel = []
  for ( let i = 0; i < countries.length; i++ ){
    let country = countries[i];
    if (vowels.includes(country[0]) && lowerCase.includes(country[country.length - 1])){
      countriesBeginningAndEndingWithVowel.push(country)
    }
  }
  return countriesBeginningAndEndingWithVowel

}

// [ ] What country names are > 50% vowels?
const getCountriesWithMoreThan50PercentVowels = (countries) => {
  let vowelCount = 0;
  let countryList = []
  for ( let i = 0; i < countries.length; i++){
    let country = countries[i]
    // Check each letter in country 
    for ( let j = 0; j < country.length; j++ ){
      // console.log(country[letter])
      // if it is a vowel
      if ( vowels.includes(country[j].toUpperCase())){
        // increment vowlCount
        vowelCount++ 
      }
    }
  
    // if  vowelCount > country.length 
    if ( vowelCount > country.length / 2 ){
      // push country to empty countryList
      countryList.push(country);
    }
    vowelCount = 0;
  }


  return countryList
}
  
// Setting up storage to use during a for loop, including counters and arrays

// [ ] What is the shortest country name? Make sure your solution can handle ties.
const getShortestCountry = (countries) => {
  // assign shortestCountry to array with countries[0]
  let shortestCountry = []
  let shortest = countries[0]
  // loop through countries
  for (let i = 0; i < countries.length; i++){
    // assign country to countries[i]
    let country = countries[i];
    if (countries[i] === ''){
      break;      
    }
    // if shortestCountry is greater than country
    if (country.length < shortest.length){
      // reassign shortestCountry to [] 
      shortestCountry = []
      // reassign shortest to county
      shortest = country
      // push country to shortestCountry
      shortestCountry.push(country)
      // check for ties
    }
    if( country.length === shortest.length){
      shortestCountry.push(country)
    }
  } 
  return shortestCountry
}

// [ ] What countries use only one vowel in their name (the vowel can be used multiple times)
//     - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.

const getCountryWithOnlyOneVowel = (countries) => {
  let countriesWithOnlyOneVowel = [];
  // Loop over every country in the array of countries. For each country:
  for(let i = 0; i < countries.length; i++){
    //     Set up a counter of how many distinct vowels we've see.
    let counter = 0;
    //     For every vowel, check if that vowel is in the country. If it is, increment the counter.
    for(let j = 0; j < vowels.length; j++){
      if(countries[i].toUpperCase().includes(vowels[j])){
        counter++
      }
      //     By the end of checking every vowel, if counter is equal to 1, the country is a match for this question, so console.log it
    }
    if(counter === 1){
      countriesWithOnlyOneVowel.push(countries[i])
    }
  }
  return countriesWithOnlyOneVowel;
}



// [ ] There is at least one country name that contains another country name. Find all of these cases.

const getCountriesWithOtherCountryNames = (countries) => {
  let countryList = [];
  // loop countries 
  for ( let i = 0; i < countries.length; i++){
    // if country includes next country
    for( let j = i+1; j < countries.length; j++){
      if( countries[j].includes(countries[i])){
        // push country to empty countryList array
        countryList.push(countries[j])
      }
    }    
  }
  return countryList
}



module.exports = {
  getCountriesWithUnited,
  getCountriesBeginningAndEndingWithVowel,
  getCountriesWithMoreThan50PercentVowels,
  getCountriesWithOtherCountryNames,
  getShortestCountry,
  getCountryWithOnlyOneVowel,
}