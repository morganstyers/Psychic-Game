// variables to keep track of points, guessed letters and tries remaining
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var attemptList = [];
var userGuess=  [];
//variables indicating array possibilities and restrictions
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(compGuess);

document.onkeyup = function (event) {
    var userGuess = event.key;

    attemptList.push(userGuess);

    var reset = function () {
        numGuessesLeft = 10;
        attemptList = [];
    };
    

    if (userGuess === compGuess) {
        alert('Hurrayyyyy');
        wins++;
        document.getElementById("winCount").innerHTML = "Wins: " + wins;
        reset();

    }

    else {
        losses++;
        numGuessesLeft--;
    }

    if (numGuessesLeft === 0) {
        alert('nooooooooooooo');
        losses++;
        document.getElementById("lossCount").innerHTML = "Losses: " + losses;
        alert('nooooooooooooo')
        numGuessesLeft = 9;
        reset();
    };



}

function numGuessesLeft() {

}
function attemptList() {

    var html = "<p>WinCount: " + Win + "</p>" + "<p>LossCount " + Lose + "<p> guessCount " + numGuessesLeft + "<p>Your Guesses so far: " + attemptList.join(', '); //Reveal guessed letters here
    document.getElementById("print-content").innerHTML = html;
}
