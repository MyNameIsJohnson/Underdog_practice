const fs = require('fs');
const csv = require('csvtojson');

(async () => {
  const billboard = await csv().fromFile('billboard100_2000.csv');

  console.log(billboard)
})();