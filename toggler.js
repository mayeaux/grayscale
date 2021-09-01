//myNodeFile.js
const { exec } = require("child_process");
exec("./toggle-grayscale", function (error, stdout, stderr){
console.log(error, stdout, stderr);

});

