// [ ] What countries use only one vowel in their name (the vowel can be used multiple times)
//     - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
let countries = ['Madagascar','Jamaica','Kenya','Israel'];
let vowels = ['A', 'E', 'I', 'O', 'U'];

const getCountriesWithOnlyOneVowel = (countries) => {
  let countriesWithOnlyOneVowel = [];
  let counter = 0;
  // loop and check each countries letter 
  for ( let i = 0; i < countries.length; i++){    
    // change all words in array to uppercase
    let country = countries[i].toUpperCase();
    let vowelsFound = [];
    
    for (let j = 0; j < country.length; j++){
      
      // if it is vowel 
      if(vowels.includes(country[j])){
        vowelsFound.push(country[j])
      }      
    }
    console.log(vowelsFound)
    // if vowelsFound
    // compare first letter to all other letters
    for (let k = 0; k < vowelsFound.length; k++){
      if (vowelsFound[0] !== vowelsFound[k]){
        countriesWithOnlyOneVowel.push(country[k])
      }
    } 

  }
  return countriesWithOnlyOneVowel

}
getCountriesWithOnlyOneVowel(countries)