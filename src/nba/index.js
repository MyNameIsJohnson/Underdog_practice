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
    findWinnerByYear,
    allYearsThisTeamWon,
    allTeamsThatNeverWon,
  } = require('./nbaFinals.js')

  console.log(findWinnerByYear(nba, '2019' ));
  console.log('allYearsThisTeamWon', allYearsThisTeamWon(nba, 'Los Angeles Lakers'));
  console.log('allTeamsThatNeverWon', allTeamsThatNeverWon(nba))
  




})();

