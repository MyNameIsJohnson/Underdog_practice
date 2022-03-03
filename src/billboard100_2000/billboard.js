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
  for ( let song in billboard ){
    if(billboard[song]['rank'] === '1'){      
      billboardNumberOnes.push(`${billboard[song]['song']} - ${billboard[song]['artist']}`)
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
  for( let song in billboard){
    let songs = billboard[song];    
    // if billboard at song rank equal #1
    
    if(songs['rank'] === '1'){
      // push week and artist to empty array
      artistAndWeeks.push([songs['weeks-on-board'], songs['song'], songs['artist']]);
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
// [ ] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

module.exports = {
  getBillboardNumberOneHits,
  getNumberHitArtistAndWeeks,
}