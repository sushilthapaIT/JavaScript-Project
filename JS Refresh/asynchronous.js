// const fs = require("fs");
// // filesystem module

// fs.readFile("a.txt", "utf-8", function(err, data){ //error first callback
//     console.log(data);
// })

// console.log("hi there")



const fs = require("fs");

// Read file "a.txt" using UTF-8 encoding
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
});

// This will be executed before the file is read
console.log("hi there");
