var wordList = [
"Top Gun", 
"Back To The Future", 
"Ferris Bueller's Day Off", 
"The Fugitive",
"Scream",
"Forest Gump",
"Star Wars",
"Norbit",
"The Sandlot",
"Little Rascals",
"The God Father",
"Independence Day",
"E.T.",
"Titanic",
"Avatar",
"Jurrassic Park",
"Lion King",
"The Jungle Book",
"Black Panther",
"Captain America: Civil War",
"DeadPool",
"Mean Girls",
"Chronicle",
"The Dark Knight",
"The Matrix",
"The Room",
"Cinderella Man",
"Footloose",
"Lords of Dogtown",
"Ghostbusters"
];

var blankWord = [];

var conChk = 0;

var userGuess = document.getElementById("userGuess");
var pastGuesses = document.getElementById("pastGuesses");
var guessesLeft = document.getElementById("guessesLeft");

var wrongGuesses = [];
var guessLimit = 15;
var losses = 0;
var wins = 0;

var randomNum = (Math.floor(Math.random() * wordList.length));
var randomWord = wordList[randomNum];

for(var i=0; i<randomWord.length; i++) {
    if(randomWord.charAt(i) === " "){
        blankWord.push("\xa0");
    }
    else{
        blankWord.push("_");

    }
}

var currentWord = document.getElementById("currentWord");
currentWord.textContent = blankWord.join(" ");

guessesLeft.textContent = guessLimit;


document.onkeyup = function(event) {

    var currentGuess = event.key;
    userGuess.textContent = currentGuess;
   
    for(var i = 0; i < randomWord.length; i++) {

        if (currentGuess === (wordList[randomNum].charAt(i))) {
            blankWord[i] = currentGuess;
            currentWord.textContent = blankWord.join(" ");
        }
        
        if (currentGuess.toUpperCase() === (wordList[randomNum].charAt(i))) {
            blankWord[i] = currentGuess.toUpperCase();
            currentWord.textContent = blankWord.join(" ");
        }
    }

    if (currentGuess !== (wordList[randomNum].charAt(i))){
        wrongGuesses.push(currentGuess);
        guessLimit --;
        guessesLeft.textContent = guessLimit;
        pastGuesses.textContent = wrongGuesses;   
    }
    
}

console.log(currentWord);
console.log(currentWord.length);
//console.log(userGuess);
//console.log(conChk);

//Underscore Idea

// var arr = ["_", "_", "_"];
// undefined
// arr.join();
// "_,_,_"
// arr.join("");
// "___"
// arr.join(" ");
// "_ _ _"
// arr[1]="e"
// "e"
// arr.join(" ");
// "_ e _"
// arr
// (3) ["_", "e", "_"]

// for(var j=0; j<6; j++){
//     console.log("n");   
// }
