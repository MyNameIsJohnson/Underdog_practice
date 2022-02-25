// - What movies on this list were distributed by DreamWorks?

const getDistributorTitles = (movies, distributor) => {
  // empty array for holding movies found
  let distributorTitle = [];
  // empty object for Distributor movies form DreamWorks
  // look through movies with filter
  movies.filter(movie => {
    // if Distributor is equal to distributor 
    if(movie.Distributor === distributor){
      // push movie title to distributorTitle
      distributorTitle.push(movie.Title);
    }
  });
  return distributorTitle
} 

// - What is the highest grossing moving from Universal Pictures, domestically?
// get all 'US Sales'
const getHighestDomesticSales = (movies, distributor) => {
  // empty array to hold all 'US Sales'
  let domesticSales = [];
  let myMovie = {};
  // loop through movies
  for(let movie in movies){
    // grab movies from Universal Pictures 'US Sales' and 
    // add to array holding
    if(movies[movie]['Distributor'] === distributor){
      domesticSales.push([movies[movie]['Title'], movies[movie]['US Sales']])
    }
  }
  // use the array holding all 'US Sales' to find highest gross
  // sort the array in descending order and
  domesticSales.sort(function(a, b) {
    return b[1] - a[1];
  })
  // return first index  
  return domesticSales[0]    
}


// -  What distributor has the most films on this list?                                                                             
// - What is the earliest year on this list, and what were the films from that year?
// - What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  

module.exports = {
  getDistributorTitles,
  getHighestDomesticSales,
}