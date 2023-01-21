// alert("hello world");
var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
// var randomNumber2=Math.floor(Math.random()*6+1);
// console.log(Math.floor(randomNumber1));
// var x="dice"+randomNumber1;
// alert(x);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
// var winner="ankit";
document.querySelector("h1").innerHTML="Refresh me";

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="player 1 wins";
    // var winner="player 1 wins";
} 
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
    // var winner="player 2 wins";
}
else {
    // var winner="Its a draw";
    document.querySelector("h1").innerHTML="Its a draw";

}
// document.querySelector("h1").innerHTML=winner;