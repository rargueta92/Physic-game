// Computer choice of arrays

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// variables
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// allows user to push a key

document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var playerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


if (playerGuess.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
        guessChoices = [];
    }

    if (userGuess != computerGuess) {
        numGuesses --;
        guessChoices.push(userGuess);
    }

    if (numGuesses === 0) {

    numGuesses = 9;
    losses ++;
    guessChoices = [];

    
}

var html = 
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + numGuesses + "</p>" +
"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;


}
};


