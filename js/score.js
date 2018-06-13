var p1 = document.querySelector("#p1");
var p2 = document. getElementById("p2");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var s1 = document.querySelector("#score1");
var s2 = document.querySelector("#score2");
var gameOver = false;
var winningScore = 0;
var maxScore = document.querySelector("#playingto");
var winSpan = document.querySelector("#winningScore");

maxScore.addEventListener("change", function() {
	winningScore = Number(this.value);
	winSpan.textContent = winningScore;
});

p1.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			s1.classList.add("winner");
			gameOver = true;
		}
		s1.textContent = p1Score;
	}
});

p2.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			s2.classList.add("winner");
			gameOver = true;
		}
		s2.textContent = p2Score;
	}
});

reset.addEventListener("click", function() {
	p1Score = 0;
	p2Score = 0;
	s1.textContent = p1Score;
	s2.textContent = p2Score;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
	gameOver = false;
	winSpan.textContent = "0";
	winningScore = 0;
	maxScore.value = winningScore;
});
