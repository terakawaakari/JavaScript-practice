var rotate = $("#circle");
var roulette;
var count = 0;

// function start() {
//     roulette = setInterval(function(){
//     count++;
//     if(count > 360){
//       count = 0;
//     }else{
//       rotate.css({ transform: "rotate("+ count*100+"deg)" });
//     }
//   }, 100);
// }

// function stop() {
//   if(roulette) {
//     clearInterval(roulette);
//   }
// }

// 各要素
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const circle = document.getElementById('circle');

let deg = 0; // 角度
let velocity = 0; // 初速
let active = false; // 動作状態

// スタートクリック
start.addEventListener('click', () => {
  if(!active) {
    active = true;
    velocity = 60 + Math.random() * 20;
    roulette();
  }
});

// ストップクリック
stop.addEventListener('click', () => {
  if(active) {
    active = false;
  }
});

// リセットクリック
reset.addEventListener('click', () => {
  active = false;
  location.reload();
});

// 回転処理
function roulette() {
  deg += velocity;
  velocity /= 1.005;
  if(active && velocity > 0.2) {
    setDeg();
    requestAnimationFrame(roulette);
  }
  else {
    active = false;
  }
}

// 角度セット
function setDeg() {
  circle.style.transform = `rotate(${deg}deg)`;
}