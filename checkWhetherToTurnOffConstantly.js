//myNodeFile.js



// TODO: set a time where it begin and stop running (range from this to this)
// TODO: alias: gscale (or launch on start)

const { exec } = require("child_process");
const fs = require('fs');



function shouldRun(){
  const fileValue = fs.readFileSync('./onOrOff.txt', {encoding: 'utf-8'});
  console.log('file value');
  console.log(fileValue);
  console.log('grayscaleOn')
  console.log(fileValue === 'grayscaleOn');
  if(fileValue === 'grayscaleOn'){
    return true
  } else {
    return false
  }

}

// todo: read from file

console.log('should run')
let run = shouldRun()
console.log(run);

if(run){
  exec("./alwaysoff", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
  });
}

setInterval(function(){
  console.log('should run')
  let run = shouldRun()
  console.log(run);
  if(run){
    exec("./alwaysoff", function (error, stdout, stderr){
      console.log(error, stdout, stderr);
    });
  }

}, 1000 * 5)


