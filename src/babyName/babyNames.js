// [ ] What is the shortest baby name in the top 40 baby names for 2020?
const getShortestBabyName = (babyNames) => {
  // assign first name to shortest
  let shortest = babyNames[0];
  let shortestBabyName = []
  // loop baby names
  
  for (let i = 0; i < babyNames.length; i++){
    if(babyNames[i] === ''){
      break;
    }
    // if shortest is greater than baby name 
    if (shortest.length > babyNames[i].length){

      // push baby name to empty array shortestBabyName
      shortestBabyName.push(babyNames[i])
      // reassign shortest to shortestBabyName[0]
      shortest = shortestBabyName[0]
    }

  }
  // return shortestBabyName
  return shortestBabyName
}

// [ ] What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

const getLongestBabyName = (babyNames) => {
  // assign first name to shortest
  let longest = babyNames[0];
  let longestBabyName = [];
  // loop baby names
  
  for (let i = 0; i < babyNames.length; i++){
    if(babyNames[i] === ''){
      break;
    }
    // if longest is greater than baby name 
    if (babyNames[i].length > longest.length){
      // push baby name to empty array longestBabyName 
      longestBabyName = []
      longestBabyName.push(babyNames[i]);      
      
    }   
    if(babyNames[i].length === longest.length){
      longestBabyName.push(babyNames[i]);
    }
    // reassign longest to longestBabyName[0]
    longest = longestBabyName[0]     
  }
  // return longestBabyName
  return longestBabyName
}
  

// Nested for loops

// [ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

const getScrabbleWordWithArray = (babyNames, scrabbleWords) => {

  let scrabbleWordsFromBabyName = [];

  // loop baby names 
  for (let i = 0; i < babyNames.length; i++){
    if(babyNames[i] === ''){
      continue;
    }
    let babyNameReversed = babyNames[i].split('').reverse().join('').toUpperCase();
    if(scrabbleWords.includes(babyNameReversed)){
      scrabbleWordsFromBabyName.push(babyNameReversed)
    }
  }  
  return scrabbleWordsFromBabyName
}


//     [ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?

const getScrabbleWordsWithSet = (babyNames, scrabbleWords) => {
  let textSet = new Set(scrabbleWords)
  let reversedBabyName = [];

  // loop baby names 
  for (let i = 0; i < babyNames.length; i++){
    if(babyNames[i] === ''){
      continue;
    }
    let babyNamesReverse = babyNames[i].split('').reverse().join('').toUpperCase();
    if(textSet.has(babyNamesReverse)){
      reversedBabyName.push(babyNamesReverse)
    }
  }  
  return reversedBabyName
}

const getExecutionTime = (testName, func) => {
  const start = Date.now()
  console.log(testName, func)
  const duration = Date.now() - start
  console.log(duration)
}

// [ ] What are all of the names that were top 40 baby names in both 1880 and 2020?

const getAllPopularNamesIn1880And2020 = (babyNamesIn1880, babyNamesIn2020) => {
  // declare empty array popularNames 
  let popularNames = [];
  // loop through both list 
  for ( let i = 0; i < babyNamesIn1880.length; i++){
    //  check if 2020 list includes 1880
    if( babyNamesIn1880[i] === ''){
      continue;
    }
    if ( babyNamesIn2020.includes(babyNamesIn1880[i])){
      //  push 2020 to popularNames
      popularNames.push(babyNamesIn1880[i])
    }
  }
  return popularNames
}

const getEveryNameFromBothYearsStartingWithLetter = (babyNamesIn1880, babyNamesIn2020, firstLetter) => {
  let combinedBabyNames = babyNamesIn1880.concat(babyNamesIn2020)
  let everyNameFromBothYearsStartingWithLetter = [];
  for ( let i = 0; i < combinedBabyNames.length; i++){

    if(isFirstLetter(combinedBabyNames[i], firstLetter)){
      everyNameFromBothYearsStartingWithLetter.push(combinedBabyNames[i])
    }
  }
  return everyNameFromBothYearsStartingWithLetter;
}

const isFirstLetter = (name, firstLetter) => {
  if ( name === ''){
    return false;
  }
  if ( name[0] === firstLetter){
    return true;
  }else{ 
    return false}
} 

module.exports = {
  getShortestBabyName,
  getLongestBabyName,
  getScrabbleWordWithArray,
  getScrabbleWordsWithSet,
  getExecutionTime,
  getAllPopularNamesIn1880And2020,
  getEveryNameFromBothYearsStartingWithLetter,
}