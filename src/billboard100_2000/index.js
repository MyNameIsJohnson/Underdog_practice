const fs = require('fs');
const csv = require('csvtojson');

(async () => {
  const billboard = await csv().fromFile('billboard100_2000.csv');

  const { 
    getBillboardNumberOneHits,
    getNumberHitArtistAndWeeks,
    getArtistMostCharted,
    getSongsWithMostWeeks,
    getOneHits,
    getArtistsWithOneHits,
    getSortedOneHitWondersByPeakRank,
   } = require('./billboard.js')

  //  console.log(billboard)

  // console.log('Billboard #1 Hits: ', getBillboardNumberOneHits(billboard));
  // console.log(getNumberHitArtistAndWeeks(billboard))
  // console.log('getArtistMostCharted', getArtistMostCharted(billboard))
  // console.log(getSongsWithMostWeeks(billboard))
  // console.log(getOneHits(billboard))
  // console.log(getArtistsWithOneHits(billboard));
  console.log(getSortedOneHitWondersByPeakRank(billboard))
})();