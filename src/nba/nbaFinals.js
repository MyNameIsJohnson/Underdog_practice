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



module.exports = {
  assertEquals,
  findWinnerByYear,
  allYearsThisTeamWon,
  allTeamsThatNeverWon,
}