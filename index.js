
var diceOne = document.getElementById("dice1");
var diceTwe = document.getElementById("dice2");

function changeDices(){
    var randomNumber1 = Math.random() * 6;
    var randomNumber2 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"
    diceOne.setAttribute("src", randomDiceImage1)

    randomNumber2 = Math.floor(randomNumber2) + 1;
}






