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
// -  What distributor has the most films on this list?                                                                             
// - What is the earliest year on this list, and what were the films from that year?
// - What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  

module.exports = {
  getDistributorTitles,
}