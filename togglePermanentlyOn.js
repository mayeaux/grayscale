// todo: read file, and change
const notifier = require('node-notifier');
const fs = require('fs');
const pathToFile = '/Users/anthony/Development/c/onOrOff'
const { exec } = require("child_process");

// fs.writeFileSync('./onOrOff.txt','grayscaleOn')
const fileValue = fs.readFileSync(pathToFile, {encoding: 'utf-8'});

// switch the value each time this is pressed
if(fileValue == 'grayscaleOn'){
  fs.writeFileSync(pathToFile,'grayscaleOff')
  exec("./alwaysTurnGrayscaleOff", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
    process.exit(0);
  });
  notifier.notify('Grayscale turned off');

} else {
  exec("./alwaysoff", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
    process.exit(0);
  });
  fs.writeFileSync(pathToFile,'grayscaleOn')
  notifier.notify('Grayscale turned on');

}


// if grayscale on then every 5 seconds make sure it's on (alwaysoff)
// if grayscaleOff then do nothing
// then have a pm2 start script



