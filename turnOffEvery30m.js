const { exec } = require("child_process");

function guaranteeTurnOff(){
  exec("./alwaysOn", function (error, stdout, stderr){
    console.log(error, stdout, stderr);
    exec("./alwaysoff", function (error, stdout, stderr){
      console.log(error, stdout, stderr);
    });
  });
}


setInterval(function(){
  guaranteeTurnOff()
}, 1000 * 60 * 1)

guaranteeTurnOff()
