var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor; 

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	// generate new colors
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickRandomColor();
	// changing the display
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	// generate new colors
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickRandomColor();
	// changing the display
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for(var i = 0; i< squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click",function() {
		// grab color of current square
		var clickedColor = this.style.backgroundColor;
		console.log("Clicked color is "+clickedColor);
		// compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	// loop through all squares
	for(var i = 0; i<squares.length; i++) {
	// change each color to piickedColor
	squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click", function() {
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	colors = generateRandomColors(6);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});
