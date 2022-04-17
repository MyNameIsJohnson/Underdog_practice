var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var textByLine = text.split('\n')


// Write a function that takes a prefix and a suffix, and returns True if there are words with the prefix and suffix in sowpods.txt.

// loop the sowpods and check if the prefix and suffix is included in sowpods
// if so return 
const checkPrefixAndSuffix = (prefix, suffix, sowpods) => {

  let obj = {
    prefix: [],
    suffix: [],
  };
  let pre = [];
  let suf = [];
  for( let i = 0; i < sowpods.length; i++){

    if(sowpods[i].startsWith(prefix)){      
      pre.push(sowpods[i])
      obj['prefix'].push(sowpods[i])
    }
    if(sowpods[i].endsWith(suffix)){
      suf.push(sowpods[i]);
      obj.suffix.push(sowpods[i])

    }
  }
  obj[prefix] = pre
  obj[suffix] = suf
  return obj
}

// Find all words that don't have any vowels or Y in it.

// loop through sowpods and check for words without vowels including Y
const hasNoVowls = (word) => {
  if(!word.includes("A")
    && !word.includes("E")
    && !word.includes("I")
    && !word.includes("O")
    && !word.includes("U")
    && !word.includes("Y")){
  return true
  } else {
    return false
  }
}

const getAllNonVowelWords = (sowpods) => {
  let allNonVowelWords = [];
  for ( let i = 0; i < sowpods.length; i++ ){
    if(hasNoVowls(sowpods[i])){
      allNonVowelWords.push(sowpods[i])
    }
  }
  return allNonVowelWords;
}




// console.log('getAllNonVowelWords', getAllNonVowelWords(textByLine))
// console.log('checkPrefixAndSuffix', checkPrefixAndSuffix('PRE', 'ATE', textByLine))
// console.log('checkPrefixAndSuffix', checkPrefixAndSuffix('ANTI', 'TION', textByLine))

