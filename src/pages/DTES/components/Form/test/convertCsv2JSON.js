const csvToJson = require('convert-csv-to-json');
const path = require('path');

const fileInputName = path.resolve(__dirname, './test_v3.0.0.csv');
const fileOutputName = path.resolve(__dirname, './test_data.json');

csvToJson
  .fieldDelimiter(',')
  .supportQuotedField(true)
  .generateJsonFileFromCsv(fileInputName, fileOutputName);
