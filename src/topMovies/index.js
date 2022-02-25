const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {
  
  // Load the topMovies
  const topMovies = await csv().fromFile("top_movies.csv");
  // // Saved the topMovies
  // const topMovies = new Parser({ fields: ["Year","Winner","Loser","Score","MVP"] }).parse(topMovies);  
  // fs.writeFileSync("topMovies.csv", topMovies);
        
  const { 
    getDistributorTitles,
    getHighestDomesticSales, 
  } = require('./topMovies')

  // console.log(topMovies)
  // console.log(getDistributorTitles(topMovies, "DreamWorks"))
  console.log(getHighestDomesticSales(topMovies, 'Universal Pictures'))


})();

