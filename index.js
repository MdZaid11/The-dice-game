var n=Math.ceil(Math.random()*6);
document.querySelector(".dice-img1").src=`images/dice${n}.png`;
var m=Math.ceil(Math.random()*6);
document.querySelector(".dice-img2").src=`images/dice${m}.png`;
if (n>m){
  document.querySelector("h1").innerHTML="Player 1 wins"
}
else if (n===m){
  document.querySelector("h1").innerHTML="Draw"
}
else {
  document.querySelector("h1").innerHTML="Player 2 wins"
}
