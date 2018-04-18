var wordList = [
"Top Gun", 
"Back To The Future", 
"Ferris Bueller's Day Off", 
"Butch Cassidy and The Sundance Kid", 
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
"GhostBusters"
]

var conChk = 0;

var userGuess = document.getElementById("userGuess");
var pastGuesses;
var guessLimit = 10;

var currentWord = document.getElementById("currentWord");
var randomWord = (Math.floor(Math.random() * wordList.length));

currentWord.textContent = wordList[randomWord];

document.onkeyup =function(event) {
    var currentGuess = event.key;
    userGuess.textContent = currentGuess;
}

//attempt to loop through individual string, does not log
    for(var i = 0; i < wordList[randomWord].length; i++){
        console.log(wordList[randomWord].charAt[i]);
    }





//console.log(currentWord);
//console.log(userGuess);
//console.log(conChk);


