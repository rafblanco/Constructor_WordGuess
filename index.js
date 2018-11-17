var Word = require("./word");
var inquirer = require("inquirer");

var wordBank = ["westoros", "cersi", "khalessi", "drogo", "whitewalker", "lannisters", "starks", "targaryens", "maester", "baratheons"];
var chosenWord = [];
var guesses = 10;
var matchedLetters = [];
var lettersPicked = [];

randomWord()
userInput()

function randomWord() {
    var num = Math.floor(Math.random() * wordBank.length);
    chosenWord = new Word(wordBank[num]);
}

function newWord() {
    chosenWord= []
    matchedLetters = []
    lettersPicked = []
    guesses = 10;
    randomWord();
    userInput();
}

function checkWin() {
    var win;
    if (matchedLetters.length === 0) {
        win = false;
    } else {
        win = true;
    }
    for (var i = 0; i < chosenWord.word.length; i++) {
        if (matchedLetters.indexOf(chosenWord.word[i]) === -1) {
            win = false;
        }
    }
    if (win) {
        console.log("You got it right! Next word!");
        newWord();
    } else {
        userInput()
    }
}

function userInput() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess"
        }
    ])
        .then(function (response) {
            var guessedChar = response.guess
            // Make conditional that checks if user already played letter
            if (lettersPicked.indexOf(guessedChar) > -1) {
                console.log("Letter has been already picked. Try again!")
                userInput()
            } else {
                lettersPicked.push(guessedChar);
                if (chosenWord.word.indexOf(guessedChar) > -1) {
                    matchedLetters.push(guessedChar);
                    chosenWord.guessFunc(guessedChar);
                    chosenWord.returnStr();
                    console.log('\n' + '\x1b[32m%s\x1b[0m', 'CORRECT!');
                    checkWin()
                } else {
                    chosenWord.returnStr();
                    console.log('\n' + '\x1b[31m%s\x1b[0m', 'INCORRECT!');
                    guesses--;
                    if (guesses === 0) {
                        console.log("You lose! Here's a new word!")
                        newWord()
                    } else {
                        console.log(guesses + " guesses remaining!!!");
                        userInput();
                    }
                }
            }
        });
}