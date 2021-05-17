var rotate = $("#circle");
var roulette;
var count = 0;

function start() {
    roulette = setInterval(function(){
    count++;
    if(count > 360){
      count = 0;
    }else{
      rotate.css({ transform: "rotate("+ count*100+"deg)" });
    }
  }, 100);
}

function stop() {
  if(roulette) {
    clearInterval(roulette);
  }
}
