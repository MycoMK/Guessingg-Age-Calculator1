// creeat secret code
var secretNumber = 4;

// Ask user fir guess
var guess = Number(prompt("Guess a number"));

// check if guess is right
if (guess === secretNumber) {
  alert("YOUR GUESS IS RIGHT");
}

// //otherwiswe you gat it wrong
// else {
//   alert("wronggg");
// }

// check if guess is too high
else if (guess > secretNumber) {
  alert("Too High Guess Again");
}

//check if guess is too low
else if (guess < secretNumber) {
  alert("Too low Guess Again");
}
