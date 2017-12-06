

var gamesWon = document.getElementById("wins");
var gamesLost = document.getElementById("losses");
var guessesTotal = document.getElementById("guessesLeft");
var userGuesses = document.getElementById("guessed");
var guesses = 9;
var lettersGuessed = []; 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chosen = letters[Math.floor(Math.random() * letters.length)];

console.log(gamesWon);
console.log(gamesLost);
console.log(guesses);
console.log(lettersGuessed);
console.log(letters);
console.log(chosen);

document.onkeyup = function(event){

	var userGuess = event.key;
	decrementGuesses();

	if(userGuess == chosen){
		resetGuesses();
		incrementWins();
		newLetter();
	}
	else if (guesses == 0){
		resetGuesses();
		newLetter();
		incrementLosses();
	}
	else{
		addToGuesses(userGuess);
	}
	console.log(guesses);
}

function resetGuesses(){
	guesses = 9;
	guessesTotal.textContent = guesses.toString();

}

function incrementWins(){
	gamesWon.textContent = (parseInt(gamesWon.textContent)+1).toString();
}

function newLetter(){
	chosen = letters[Math.floor(Math.random() * letters.length)];
	console.log(chosen);
	lettersGuessed = [];
	userGuesses.textContent = " ";
}

function incrementLosses(){
	gamesLost.textContent = (parseInt(gamesLost.textContent)+1).toString();
}

function decrementGuesses(){
	guesses--;
	guessesTotal.textContent = guesses.toString();
}

function addToGuesses(letter){
	lettersGuessed.push(letter);
	var temp = lettersGuessed[0];
	for(var i = 1; i < lettersGuessed.length; i++){
		temp = temp + ", " + lettersGuessed[i];
	}
	userGuesses.textContent = temp;
}
