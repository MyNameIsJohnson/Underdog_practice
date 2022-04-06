var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')

// What are all of the words that have only “E” as the vowel and are at least 15 letters?

let vowelsWithoutE = ["A","I","O","U"]

const getWordsWithOnlyEAnd15LettersOrLonger = (sowpods) =>{
  let arr = [];
  for(let i = 0; i < sowpods.length; i++){
    if((sowpods[i].includes('E')) && (sowpods[i].length >= 15) && (noOtherVowelsButE(sowpods[i]))        
    ){
      arr.push(sowpods[i])
    }
  }
  return arr
}

const noOtherVowelsButE = (word) => {
  if(!word.includes("A") 
    && !word.includes("I") 
    && !word.includes("O") 
    && !word.includes("U")) {
      return true
    }else{
      return false
    }        
}


// console.log(getWordsWithOnlyEAnd15LettersOrLonger(textByLine))

// console.log(noOtherVowelsButE("BEEKEEPAR"))

// - What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

const checkProAndIng = (sowpods) => {
  let arr = [];
  for(let i = 0; i < sowpods.length; i++){
    if(sowpods[i].startsWith("PRO") && sowpods[i].endsWith("ING")){
      arr.push(sowpods[i])
    }

  }
  return arr
}

// take output of checkProAndIng and sort ascending order 

const getShortest = (sowpods) => {
  let words = checkProAndIng(sowpods);
  let shortest = words[0];
  let shortestWords = []
  for(let i = 0; i < words.length; i++){
    if(words[i].length < shortest.length){
      shortestWords.push(words[i])
    }
  }
  shortest = shortestWords[0]

  // let shortestWord = shortestWords.sort((a,b) => 
  //   a.length - b.length
  // )
  return shortestWords
}

console.log('shortestWords',getShortest(textByLine))