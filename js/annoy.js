var response = prompt("Are we there yet?");

while(response.indexOf("yes") === -1) {
	var response = prompt("Are we there yet?");
}

alert("Yay, we made it!");
