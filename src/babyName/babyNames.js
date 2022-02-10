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
  let longestBabyName = []
  // loop baby names
  
  for (let i = 0; i < babyNames.length; i++){
    if(babyNames[i] === ''){
      break;
    }
    // if longest is greater than baby name 
    if (longest.length < babyNames[i].length){
      // push baby name to empty array longestBabyName
      longest = longestBabyName[0]
      longestBabyName.push(babyNames[i])
      // reassign longest to longestBabyName[0]
    }
  }
  // return longestBabyName
  return longestBabyName
}
  

// Nested for loops

// [ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
//     [ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
// [ ] What are all of the names that were top 40 baby names in both 1880 and 2020?


module.exports = {
  getShortestBabyName,
  getLongestBabyName,
}