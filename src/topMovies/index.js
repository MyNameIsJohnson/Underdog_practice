const fs = require("fs");
const csv = require("csvtojson");
// const { Parser } = require("json2csv");

(async () => {
  // Load the topMovies
  const topMovies = await csv().fromFile("top_movies.csv");
  // // Saved the topMovies
  // const topMovies = new Parser({
  //   fields: ["Year", "Winner", "Loser", "Score", "MVP"],
  // }).parse(topMovies);
  // fs.writeFileSync("topMovies.csv", topMovies);

  const {
    getDistributorTitles,
    getHighestDomesticSales,
    getDistributorWithMostMovies,
    getEarlistYearMovies,
    getRatingCount,
  } = require("./topMovies");

  // console.log(topMovies)
  // console.log(getDistributorTitles(topMovies, "DreamWorks"))
  // console.log(getHighestDomesticSales(topMovies, 'Universal Pictures'))
  // console.log(getDistributorWithMostMovies(topMovies))
  // console.log('Earliest movies released: ', getEarlistYearMovies(topMovies))
  console.log("Distribution of Ratings: ", getRatingCount(topMovies));
})();
