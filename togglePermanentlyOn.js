// todo: read file, and change
const notifier = require('node-notifier');
const fs = require('fs');
const pathToFile = '/Users/anthony/Development/c/onOrOff'
const { exec } = require("child_process");

// fs.writeFileSync('./onOrOff.txt','grayscaleOn')
const fileValue = fs.readFileSync(pathToFile, {encoding: 'utf-8'});

// switch the value each time this is pressed
if(fileValue == 'grayscaleOn'){
  exec("/Users/anthony/Development/c/alwaysTurnGrayscaleOff", function (error, stdout, stderr){
    fs.writeFileSync(pathToFile,'grayscaleOff')
    console.log(error, stdout, stderr);
    notifier.notify('Grayscale turned off');
    process.exit(0);
  });


} else {
  exec("/Users/anthony/Development/c/alwaysoff", function (error, stdout, stderr){
    fs.writeFileSync(pathToFile,'grayscaleOn')
    notifier.notify('Grayscale turned on');
    console.log(error, stdout, stderr);
    process.exit(0);
  });


}


// if grayscale on then every 5 seconds make sure it's on (alwaysoff)
// if grayscaleOff then do nothing
// then have a pm2 start script



