//myNodeFile.js



// TODO: set a time where it begin and stop running (range from this to this)
// TODO: alias: gscale (or launch on start)

const { exec } = require("child_process");
const fs = require('fs');

function shouldRun(){
  const fileValue = fs.readFileSync('./onOrOff', {encoding: 'utf-8'});
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


