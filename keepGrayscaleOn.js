//myNodeFile.js
// TODO: set a time where it begin and stop running (range from this to this)
// TODO: alias: gscale (or launch on start)

const { exec } = require("child_process");

function runBasedOnTime(){
  var d = new Date(); // current time
  var hours = d.getHours();
  var mins = d.getMinutes();

  console.log(d, hours, mins);

  // hours are smaller than 9 and larger than 11:30 pm
  const inEarlierSegment = hours < 8
  // if hours greater or equal to 23 (11 pm or over) while minutes are equal or over 30
  const inLaterSegment = (hours >= 23 && mins >= 59);
  return inEarlierSegment || inLaterSegment
}


console.log('run based on time')
const run = runBasedOnTime()
console.log(run)
if(run){
  exec("./new", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
  });
}

setInterval(function(){
  const run = runBasedOnTime()
  if(run){
    exec("./new", function (error, stdout, stderr){
      console.log(error, stdout, stderr);
    });
  }

}, 1000 * 5)


