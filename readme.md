## EZSave

An easy way to persist objects to disk and load.

```
var ezsave = require('ezsave');

var test = Object.loadSync("test.json"); // load object from file
test.bears = "hi5"; //modify object
test.saveSync("test2.json"); //save object

var test2 = {"existing_keys": 1}.loadSync("test2.json"); //load clears existing keys
var test2_2 = {"existing_keys": 1}.appendSync("test2.json"); //append keeps existing keys

var test3 = 4; //works with numbers
test3.saveSync("test3.json");
var test4 = Object.loadSync("test3.json");
```