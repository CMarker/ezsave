var ezsave = require('./index');

var test = Object.loadSync("test.json"); // load object from file
test.bears = "hi5"; //modify object
test.saveSync("test2.json"); //save object

var test2 = {"existing_keys": 1}.loadSync("test2.json"); //load clears existing keys
var test3 = {"existing_keys": 1}.appendSync("test2.json"); //append keeps existing keys

var test4 = 4; //works with numbers
test4.saveSync("test3.json");
var test5 = Object.loadSync("test3.json");