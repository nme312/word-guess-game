$(document).ready(function () {

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
        "Black Panther",
        "Captain America: Civil War",
        "Deadpool",
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

    var userGuess = $("#userGuess");
    var pastGuesses = $("#pastGuesses");
    var guessesLeft = $("#guessesLeft");

    var wrongGuesses = [];
    var guessLimit = 15;
    var losses = 0;
    var wins = 0;

    guessesLeft.textContent = guessLimit;

    var randomNum;
    var randomWord;
    var currentWord = $("#currentWord");

    function startGame() {
        randomNum = (Math.floor(Math.random() * wordList.length));
        randomWord = wordList[randomNum];
        blankWord = [];

        for (var i = 0; i < randomWord.length; i++) {

            if (randomWord.charAt(i) === " ") {
                blankWord.push("\xa0");
            }
            else {
                blankWord.push("_");
            }
        }

        currentWord.textContent = blankWord.join(" ");
        guessLimit = 15;
        wrongGuesses = [];
    }

    startGame();
    document.onkeyup = function (event) {

        var currentGuess = event.key;
        userGuess.textContent = currentGuess;

        for (var i = 0; i < randomWord.length; i++) {

            if (currentGuess.toLowerCase() === (wordList[randomNum].charAt(i)).toLowerCase()) {
                blankWord[i] = wordList[randomNum].charAt(i);
                currentWord.textContent = blankWord.join(" ");
            }
        }

        if ((currentGuess !== (randomWord.charAt(i))) && (guessLimit > 0)) {
            console.log("works");
            guessLimit--;
            wrongGuesses.push(currentGuess);
            guessesLeft.textContent = guessLimit;
            pastGuesses.textContent = wrongGuesses;
        }

        if ((currentGuess !== (randomWord.charAt(i))) && (guessLimit > 0)) {
            guessLimit = guessLimit;
        }

        if ((guessLimit === 0) || (randomWord === currentWord)) {
            startGame();
        }
    }

    console.log("blankWord");
    console.log(blankWord);
    console.log("-----------------------");

    console.log("currentWord");
    console.log(currentWord);
    console.log("-----------------------");

    console.log("randomWord");
    console.log(randomWord);
    console.log("-----------------------");

    console.log("userGuess");
    console.log(userGuess.val());
    console.log("-----------------------");
    
    console.log("conChk");
    console.log(conChk);
    console.log("-----------------------");
});
