/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// game class declared
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'My great adventure has begun'},
            {phrase: 'Some things are meant to be'},
            {phrase: 'Do not try to make me grow up before my time'},
            {phrase: 'I have lived for loving you'},
            {phrase: 'I will shine as brightly as the sun'}
        ];
        this.activePhrase = null;
    }
} 