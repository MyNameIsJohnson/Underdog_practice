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
const getDistributorWithMostMovies = (movies) => {
  let obj = {};
  // let obj = []
  // find the distributors from movies
  for(let movie in movies){
    // add distributors empty obj
    if(obj[movies[movie]['Distributor']] === undefined){
      obj[movies[movie]['Distributor']] = 1
    }else {
      obj[movies[movie]['Distributor']]++
    }
  }
  // get obj entries
  let distributors = Object.entries(obj)
  // assign empty string to add highestDistributor found
  let highestDistributor = '';
  // assign a value to highest from value of distributors 
  let highest = distributors[0][1];
  // loop through distributors
  for (let distributor in distributors){
    if(highest < distributors[distributor][1]){
      highestDistributor = distributors[distributor][0];
      highest = distributors[distributor][1]
    }
  }
    return highestDistributor
}

// - What is the earliest year on this list, and what were the films from that year?

// collect all Release Date 
const getEarlistYearMovies = (movies) => {
  let earlistYearMovies = [];
  // add all titles and dates to array
  for ( let movie in movies){
    // sort date in ascending order
    // console.log(movies[movie]['Title'])
    // console.log(movies[movie]['Release Date'])
    earlistYearMovies.push([movies[movie]['Title'], movies[movie]['Release Date']])

  }
  earlistYearMovies.sort(function(a, b) {
    return a[1] - b[1];
  })
  return earlistYearMovies[0][0]
}


// - What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  

const getRatingCount = (movies) => {
// find all the Rating of movies
  let ratingsCount = {};
  // loop through movies at movie at Rating
  for(let movie in movies){
    // console.log(movies[movie]['Rating'])
    // add them to ratings object
    // if ratings at movie is undefined 
    if(ratingsCount[movies[movie]['Rating']] ===  undefined){
      // ratings at movie at Rating equals 1
      ratingsCount[movies[movie]['Rating']] = 1
      // else ratings at movie at Rating increment
    }else {
      ratingsCount[movies[movie]['Rating']]++
    }
  }
  // ratings = JSON.stringify(ratings)
  let ratings = Object.entries(ratingsCount)
  return ratings
}


module.exports = {
  getDistributorTitles,
  getHighestDomesticSales,
  getDistributorWithMostMovies,
  getEarlistYearMovies,
  getRatingCount,
}