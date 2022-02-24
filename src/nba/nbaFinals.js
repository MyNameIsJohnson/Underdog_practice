// [ ] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
const assertEquals = (actual, expected, testName, func) => {
  actual = JSON.stringify()
  expected = JSON.stringify()
  if( actual === expected ){
    console.log("Passed: "+ func)
  }else{
    console.log("Failed [" + testName + "]: Expected: [" + expected + "] but got: [" + actual)
  }
}
const findWinnerByYear = (file, year) => {
  for (let i = 0; i < file.length; i++) {
    if(file[i].Year === year){
      return file[i].Winner + ' won in ' + year
    }        
  }
}




// [ ] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
const allYearsThisTeamWon = (file, team) =>{
  let winners = [];
  
  file.filter(won => {    
    if(won.Winner === team){
      winners.push(won.Year)   
    };
  })
  return team + ' won in: ' + winners
};

// [ ] Which teams have made it to the NBA finals but have never won?
const allTeamsThatNeverWon = (file) => {
  let losers = [];
  let winners = [];
  let teamsThatNeverwon = [];
  //  loop through file 
  // check if file at Loser include file Winner
  // push 
  for ( let key in file) {
    // console.log(file[key]['Year'])
    // for ( let value in file[key]){
    // console.log(file[key]['Loser'] )
    losers.push(file[key]['Loser'])
    winners.push(file[key]['Winner'])
  }
  for (let i = 0; i < losers.length; i++){
    if(!winners.includes(losers[i])){
      teamsThatNeverwon.push(losers[i])
    }

  }
  return teamsThatNeverwon;
}

// [ ] Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>

const getAllMVP = (file) => {
  // empty mvp obj
  let mvpObj = {}
  // loop file 
  
  for (let key in file){
    let mvpKey = file[key]["MVP"]
    // look for mvp 

    if(file[key]['MVP'] === ''){
      break;
    }
    if(mvpObj[mvpKey] === undefined){
      mvpObj[mvpKey] = 1
    }else {
      mvpObj[mvpKey]++
    }
  }
  // create dictionary where key is count and value is array for players

  let mvpPlayers = {};

  for (let [player, count] of Object.entries(mvpObj)){

    // take count to see if it exist in dictionary
    if(mvpPlayers[count + ' times'] === undefined){
      mvpPlayers[count + ' times'] = player + ', '
    }else{
      mvpPlayers[count + ' times'] += player + ', '
    }
    // if yes add player to array inside dictionary 
    // else create new key value pair with count and player inside an array
  }
  var r = Object.keys(mvpPlayers).sort().reverse()
  console.log(r);

  var sorted ={}

//look like JS Sorted this ASC

  r.forEach(k => {
        sorted[k] = mvpPlayers[k]
    });

console.log(JSON.stringify(sorted));

// So use Array

var sorted =[]


  r.forEach(k => {
        sorted.push({"key":k ,"value": mvpPlayers[k]})
    });

console.log(JSON.stringify(sorted));
} 




module.exports = {
  assertEquals,
  findWinnerByYear,
  allYearsThisTeamWon,
  allTeamsThatNeverWon,
  getAllMVP,
}


// loop through string 
  // remove all spaces, puncutation, and non alphabetical characters 
  // change string to all lowercase
  // seperate each character in the string 
  // reverse the order of the string 
  // join all the characters into one string
  // check if string is equal to joined string
    // if they are equal return true
    // if they are not equal return false

    