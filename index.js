//set rand nums
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//set rand img src
var randomDice1 = "/images/dice" + randomNumber1 + ".png";
var randomDice2 = "/images/dice" + randomNumber2 + ".png";

//set desplayed img
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

//set score & manage title
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 has won!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 has won!";
} else {
    document.querySelector("h1").innerText = "Draw";
}