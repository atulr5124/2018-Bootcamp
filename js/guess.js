// Create a secret numner
var secretNumber = 4;

// Ask user for guess
var guess = prompt("Guess a number!");

// Check guess
if(Number(guess) === secretNumber) {
	alert("You got it right.");
} else if(Number(guess) > secretNumber) {
	alert("You guess is higher.");
} else if(Number(guess) < secretNumber) {
	alert("Your guess is lower.");
}