var Letter = function (letter) {
    this.letter = letter;
    this.boolVal = false;
    this.returnChar = function () {
        if (this.booVal === true) {
            return this.letter;
        } else {
            return " _ ";
        }
    }
    this.updateBool = function (guessedChar) {
        if (guessedChar === this.letter) {
            this.booVal = true;
        }
    }
}


module.exports = Letter;