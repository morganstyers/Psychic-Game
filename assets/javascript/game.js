// variables to keep track of points, guessed letters and tries remaining
var wins = 0;
var losses = 0;
var guessesLeft = 9
var attemptList = [];



//variables indicating array possibilities and restrictions

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(compGuess);




document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userInput.indexOf(guessesLeft) > -1) {

   reset = function () {
        gessesLeft = 10;
        attemptList = [];
    };

    if (userGuess === compGuess) {
        alert('Hurrayyyyy');
        wins++;
        document.getElementById("winCount").innerHTML = "Wins: " + wins;
        GuessesLeft=9;
        attemptList=[];
        
    }
    if (userGuess != compGuess){
        GuessesLeft--;
        userInput.push(userGuess);
    }

    if (guessesLeft === 0) {
        alert('nooooooooooooo');
        losses++;
        attemptList=[];
    };



var html= 
       "<p> Wins: "+ wins+ "</p>" +
        "<p>Losses: "+losses+ "</p>" +
        "<p>Guesses Left: "+ guessesLeft + "</p>"+
        "<p>Your Guesses So Far: "+ userInput.join(",")+"</p>"

        document.getElementById("stats").innerHTML = html;

};
}