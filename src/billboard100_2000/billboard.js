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
  let countArtiist = {}; 
  // loop through billboard at chart 
  for ( let chart in billboard ){
    // assign currentChart to billboard at chart
    let currentChart = billboard[chart];
    // if countArtiist[currentChart]['artist'] is undefined countArtist[currentChart]['artist'] = 1. Otherwise countArtist[currentChart]['artist'] increment
    if (countArtiist[currentChart['artist']] === undefined){
      countArtiist[currentChart['artist']] = 1;
    }else {
      countArtiist[currentChart['artist']]++
    }
  }
 
  let topArtist = Object.entries(countArtiist).sort((a, b) => {
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

module.exports = {
  getBillboardNumberOneHits,
  getNumberHitArtistAndWeeks,
  getArtistMostCharted,
}