var randomNumber1  = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice2.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins 🏆";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 Wins 🏆";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw !!!";
}



























// var randomNumber2  = Math.floor((Math.random() * 6) + 1);

// // Query for Dice 1

// if (randomNumber1 == 1){
//     document.querySelector('.dice .img1').setAttribute('src', 'images/dice1.png');
// } 
// else if(randomNumber1 == 2){
//     document.querySelector('.dice .img1').setAttribute('src', 'images/dice2.png');
// }
// else if(randomNumber1 == 3){
//     document.querySelector('.dice .img1').setAttribute('src', 'images/dice3.png');
// }
// else if(randomNumber1 == 4){
//     document.querySelector('.dice .img4').setAttribute('src', 'images/dice4.png');;
// }
// else if(randomNumber1 == 5){
//     document.querySelector('.dice .img5').setAttribute('src', 'images/dice5.png');
// }
// else if(randomNumber1 == 6){
//     document.querySelector('.dice .img6').setAttribute('src', 'images/dice5.png');
// }

// // Query for Dice 2

// if (randomNumber2 == 1){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice1.png');
// } 
// else if(randomNumber2 == 2){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice2.png');
// }
// else if(randomNumber2 == 3){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice3.png');
// }
// else if(randomNumber2 == 4){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice4.png');;
// }
// else if(randomNumber2 == 5){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice5.png');
// }
// else if(randomNumber2 == 6){
//     document.querySelector('.dice .img2').setAttribute('src', 'images/dice5.png');
// }

// // Checking Dice Condition

// if (randomNumber1 === randomNumber2 ) {
//     document.querySelector('h1').innerHTML = "Draw";
// }
// else if(randomNumber1 > randomNumber2) {
//     document.querySelector('h1').innerHTML = "Player 1 wins 🏆";
// }
// else if(randomNumber1 < randomNumber2) {
//     document.querySelector('h1').innerHTML = "Player 2 wins 🏆";
// }