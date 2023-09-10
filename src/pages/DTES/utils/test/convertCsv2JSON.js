const csvToJson = require('convert-csv-to-json');
const path = require('path');

const fileInputName = path.resolve(__dirname, './test_data.csv');
const fileOutputName = path.resolve(__dirname, './test_data.json');

csvToJson
  .fieldDelimiter(',')
  .generateJsonFileFromCsv(fileInputName, fileOutputName);

// let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
// console.log(json);
