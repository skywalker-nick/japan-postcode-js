"use strict";

const fs = require('fs');
const parse = require('csv-parse/sync');
const csvFile = "KEN_ALL_ROME_utf-8.csv"

// CSV indices
const POSTCODE = 0;
const PREFECTURE_JP = 1;
const CITY_JP = 2;
const DISTRICT_JP = 3;
const PREFECTURE = 4;
const CITY = 5;
const DISTRICT = 6;


var getCSVRecords = function(filename) {
    const data = fs.readFileSync(filename);
    return parse.parse(data, {
      columns: false,
    });
}

var filterCSVRecords = function(records, postcode) {
    for (var i in records) {
        if (records[i][POSTCODE] == postcode) {
            return records[i];
        }
     }
}

var records = getCSVRecords(csvFile);
var myapartment = filterCSVRecords(records, "1010032")
console.log(myapartment)