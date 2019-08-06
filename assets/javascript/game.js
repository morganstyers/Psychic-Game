// variables to keep track of points, guessed letters and tries remaining
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var attemptList = [];

var winsUser = document.getElementById("win");
var lossesUser = document.getElementById("loss");
var guessesLeftUser = document.getElementById("guess");
var userAttemptList = document.getElementById("attempt");

//variables indicating array possibilities and restrictions
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(compGuess)

restart = function() {
    guessesLeft = 9;
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)-1];
}

document.onkeyup = function (event) {
var userGuess = event.key;
attemptList.push(userGuess);


    
    if (userGuess === compGuess) {
        alert("holy crap you guessed it! you're a wizard!!!!!");
        restart();
        console.log(compGuess)
        wins++;
    }

    else {
        guessesLeft--;
        losses++;
    }

    if (guessesLeft === 0) {
        alert("Booo! You are not psychic! You are full of lies!!")
        restart();
    };
  
    winsUser.innerText = "Wins: " + wins;
    lossesUser.innerText = "Losses: " + losses;
    guessesLeftUser.innerText = "Guesses Left: " + guessesLeft;
    userAttemptList.innerText = "Your Guesses So Far: " + attemptList.join(" , ");
}