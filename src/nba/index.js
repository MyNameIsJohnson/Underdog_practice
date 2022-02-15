const CSVToJSON = require('csvtojson');
const fs = require('fs');

CSVToJSON().fromFile('./nba_finals.csv').then(source => {
  console.log(source)
})