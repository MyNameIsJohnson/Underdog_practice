const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {
  
  // Load the nba
  const nba = await csv().fromFile("nba_finals.csv");
  // Saved the nba
  const nbaInCsv = new Parser({ fields: ["Year","Winner","Loser","Score","MVP"] }).parse(nba);  
  fs.writeFileSync("nba.csv", nbaInCsv);
        
  const { 
    assertEquals,
    findWinnerByYear,
    allYearsThisTeamWon,
    allTeamsThatNeverWon,
    getAllMVP,
  } = require('./nbaFinals.js');


  let expectedWinnersByYear = 'Toronto Raptors won in 2019'
  assertEquals(findWinnerByYear(nba, '2019' ), expectedWinnersByYear, 'NBA winner by year', findWinnerByYear(nba, '2019' ))

  let expectedAllYearsThisTeamWon = [2010, 2009, 2002, 2001, 2000, 1988, 1987, 1985, 1982, 1980, 1972]
  assertEquals(allYearsThisTeamWon(nba, 'Los Angeles Lakers'), expectedAllYearsThisTeamWon, 'All years this team won', allYearsThisTeamWon(nba, 'Los Angeles Lakers'))


  console.log('allYearsThisTeamWon', allYearsThisTeamWon(nba, 'Los Angeles Lakers'));
  console.log('allTeamsThatNeverWon', allTeamsThatNeverWon(nba))
  
  console.log(getAllMVP(nba))



})();

