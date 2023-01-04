var diceOne = document.getElementById("dice1");
var diceTwo = document.getElementById("dice2");

var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
diceOne.setAttribute("src", "images/dice" + randomNumber1 + ".png")


var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
diceTwo.setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else{
    document.querySelector("h1").innerHTML = "Draw!"
}