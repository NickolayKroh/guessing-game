class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.answ = Math.ceil((this.min + this.max) / 2);
        return this.answ;
    }

    lower() {
        this.max = this.answ;
    }

    greater() {
        this.min = this.answ;
    }
}

module.exports = GuessingGame;
