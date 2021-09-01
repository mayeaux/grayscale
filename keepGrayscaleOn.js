//myNodeFile.js
// TODO: set a time where it begin and stop running (range from this to this)
// TODO: alias: gscale (or launch on start)

const { exec } = require("child_process");

function dontRunBasedOnTime() {
  var d = new Date(); // current time
  var hours = d.getHours();
  var mins = d.getMinutes();

  console.log(d, hours, mins);

  // hours are smaller than 9 and larger than 11:30 pm
  return hours >= 9 || (hours === 23 && mins <= 30);
}

console.log('dont run')
const dontRun = dontRunBasedOnTime()
console.log(dontRun)
if(!dontRun){
  exec("./new", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
  });
}
setInterval(function(){
  const dontRun = dontRunBasedOnTime()
  if(!dontRun){
    exec("./new", function (error, stdout, stderr){
      console.log(error, stdout, stderr);
    });
  }

}, 1000 * 5)


