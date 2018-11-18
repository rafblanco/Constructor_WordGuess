var Letter = require("./letter")

var Word = function (word) {

    this.letterArr = []
    this.word = word.split("")
    for (var i = 0; i < this.word.length; i++) {
        this.letterArr.push(new Letter(word[i]))
    }
    this.returnStr = function () {
        var display = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            display = display + this.letterArr[i].returnChar();
        }
        console.log(display)
    }
    this.guessFunc = function (guessedChar) {
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].updateBool(guessedChar);
        }
    }
}

module.exports = Word;