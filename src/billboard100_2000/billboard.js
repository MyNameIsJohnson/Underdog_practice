// [ ] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
// These were the number one songs of 2000:
// "Try Again" - Aaliyah
// "Say My Name" - Destiny's Child
// "What A Girl Wants" - Christina Aguilera
// "Maria Maria" - Santana Featuring The Product G&B
// "Smooth" - Santana Featuring Rob Thomas
// "Independent Women Part I" - Destiny's Child


const getBillboardNumberOneHits = (billboard) => {
  let billboardNumberOnes = [];
  for ( let chart in billboard ){
    if(billboard[chart]['rank'] === '1'){      
      billboardNumberOnes.push(`${billboard[chart]['song']} - ${billboard[chart]['artist']}`)
    }    
  }
  // remove duplicates with set
  // const billboardNumberOneHits = [...new Set(billboardNumberOnes)]

  // remove duplicates with filter and indexOf
  let billboardNumberOneHits = billboardNumberOnes.filter((c, index) => {
    return billboardNumberOnes.indexOf(c) === index;
  })
  return billboardNumberOneHits
}


// [ ] What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

// look through billboard list and collect all the #1 songs, and its weeks. Sort the list by weeks by descending order and return the first artist and how many weeks

const getNumberHitArtistAndWeeks = (billboard) => {
  let artistAndWeeks = [];
  // loop through billboard at 
  // billboard at song
  for( let chart in billboard){
    let currentChart = billboard[chart];    
    // if billboard at song rank equal #1
    
    if(currentChart['rank'] === '1'){
      // push week and artist to empty array
      artistAndWeeks.push([currentChart['weeks-on-board'], currentChart['song'], currentChart['artist']]);
    }    
  }
  // sort array in descending order
  artistAndWeeks.sort((a, b) => {
    return b[0] - a[0] 
  });

  let hitSong = artistAndWeeks[0];
  let weeks = hitSong[0];
  let artist = hitSong[1];
  let song = hitSong[2]
  // return first index of array
  return `#1 billboard song was ${song} by ${artist} for ${weeks} weeks`
}

// [ ] What artist had the most songs chart in 2000, and what were those songs?

// Gather all artist listed in each chart in billboard list and add them to one list. Count how many times that artist appears. Sort the artist list by their count in descending order then return the first on the list. 

const getArtistMostCharted = (billboard) => {
  // declare countArtist as an empty object to keep track of artist and count
  let artistCount = {}; 
  // loop through billboard at chart 
  for ( let chart in billboard ){
    // assign currentChart to billboard at chart
    let currentChart = billboard[chart];
    // if artistCount[currentChart]['artist'] is undefined countArtist[currentChart]['artist'] = 1. Otherwise countArtist[currentChart]['artist'] increment
    if (artistCount[currentChart['artist']] === undefined){
      artistCount[currentChart['artist']] = 1;
    }else {
      artistCount[currentChart['artist']]++
    }
  }
 
  let topArtist = Object.entries(artistCount).sort((a, b) => {
    return b[1] - a[1];    
  })[0][0]
  
  let songsMostCharted = []; 
  for(let chart in billboard){
    if (billboard[chart]['artist'] === topArtist){
      songsMostCharted.push(' '+billboard[chart]['song'])
    }
  }
  songsMostCharted = [...new Set(songsMostCharted)]
  return topArtist + songsMostCharted
}


// [ ] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

// search the billboard for all weeks on charts. collect all charts into array. sort descending and return first on from array. use that data and search for the song with that amount of weeks

const getSongsWithMostWeeks = (billboard) => {
  let weeks = []; 
  for(let chart of billboard){
    if(chart['weeks-on-board']){
      weeks.push(chart['weeks-on-board'])
    }
  }
  weeks.sort((a, b) =>{
    return b -a 
  })
  console.log(weeks[0])
  let songsWithMostWeeks = []
  for( let chart of billboard){
    // console.log(chart)
    if ( chart['weeks-on-board'] === weeks[0]){
      songsWithMostWeeks.push(chart['song'])
    }
  }

  return songsWithMostWeeks
}

// how many one hit wonders on billboard. 
// searching the billboard for all charts that only appear once in weeks on board

const getOneHits = (billboard) => {
  // return billboard.reduce(
  //   (countOfOneHitWonders, currentSongOnChart) => {
  //     if (currentSongOnChart['weeks-on-board'] == 1) {
  //       return countOfOneHitWonders + 1
  //     } else {
  //       return countOfOneHitWonders
  //     }
  //   },
  //   0
  // )
  // return billboard.reduce(
  //   (previous, current) => 
  //     current['weeks-on-board'] == 1 ? previous + 1 : previous, 
  //   0
  // )
  let oneHits = [];
  for(let chart in billboard){
    if(billboard[chart]['weeks-on-board'] === '1'){
      oneHits.push(billboard[chart]['weeks-on-board'])
    }
  }
  return oneHits.length
}

// Find artist(s) who is a one-hit wonders in 2000. One hit wonder is an artist with only one song

// 



const getArtistsWithOneHits = (billboard) =>{
  // data should be artist and count
  let artistCount = {}
  for(let chart of billboard){
    let artist = chart['artist'];
    if(artistCount[artist] === undefined){
      artistCount[artist] = 1
    }else{
      artistCount[artist]++
    }
  }

  let oneHitArtists = [];  

  for(let [artist, count] of Object.entries(artistCount)){
    if(count === 1){
      oneHitArtists.push(artist);
    }
  }
  return oneHitArtists
  
}
const getPeakRankByArtist = (billboard, artistsNames) => {
  let peakRankByArtist = {};

  for ( let chart of billboard ){
    let artistName = chart['artist'];
    // check for true or false
    if (artistsNames.includes(artistName)){
      let rank = Number(chart['peak-rank']);
      
      peakRankByArtist[artistName] = rank;
      
    }
  }
  return peakRankByArtist
}

const getSortedOneHitWondersByPeakRank = (billboard) => {
  let artists = getArtistsWithOneHits(billboard);
  let artistsByPeakRank = getPeakRankByArtist(billboard, artists);
  
  let artistAndRank = Object.entries(artistsByPeakRank).sort((a,b) =>{
    return b[1] - a[1]
  })
  return artistAndRank
}




module.exports = {
  getBillboardNumberOneHits,
  getNumberHitArtistAndWeeks,
  getArtistMostCharted,
  getSongsWithMostWeeks,
  getOneHits,
  getArtistsWithOneHits,
  getSortedOneHitWondersByPeakRank,
  
}