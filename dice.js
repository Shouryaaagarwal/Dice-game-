// var randoNumber1 = Math.floor(Math.random() * 6) + 1;
// var diceImages = "dice" + randoNumber1 + ".png";
// var randomImages = "images/" + diceImages;
// document.querySelectorAll("img")[0].setAttribute("src", randomImages);
// var randoNumber2 = Math.floor(Math.random() * 6) + 1;
// var diceImages2 = "dice" + randoNumber2 + ".png";
// var randomImages2 = "images/" + diceImages2;
// document.querySelectorAll("img")[1].setAttribute("src", randomImages2);
// if (randoNumber1 > randoNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 wins ";
// } else if (randoNumber1 < randoNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 wins";
// } else if (randoNumber1 === randoNumber2) {
//     document.querySelector("h1").innerHTML = "Its a Draw ";
// }
  

var randomNumber1 = Math.floor(Math.random()*6)+1 ;
var diceImage1 ="images/dice"+randomNumber1+".png" ;  
document.querySelectorAll("img")[0].setAttribute("src", diceImage1) ;


var randomNumber2 = Math.floor(Math.random()*6)+1 ;
var diceImage2 ="images/dice"+randomNumber2+".png" ; 
document.querySelectorAll("img")[1].setAttribute("src", diceImage2) ; 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 Wins" ;
} 
else{
    document.querySelector("h1").innerHTML = "Its a Draw" 
}







































