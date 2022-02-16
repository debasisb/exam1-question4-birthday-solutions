//jshint esversion:6

// Load module
const calculator = require('birthday-calculator');
 
// Instantiate
const date = new Date('1965,02,16');
const result = calculator.getDayWhenBorn(date);
console.log(result);

//use the fs function that comes with node
const fs = require("fs");
fs.writeFileSync("file1.txt", result);
