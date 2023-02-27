/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// GAME CLASS
class Game {
    // create and initialize 'missed', 'phrases', & 'activePhrase' objects
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

    // chooses a phrase from phrase arr based on random index number
    getRandomPhrase() {
        const indexNumber = Math.floor( Math.random() * this.phrases.length );
        const randomPhrase = this.phrases[indexNumber].phrase;
        return new Phrase(randomPhrase);
    }

    // hides overlay, sets phrase, & displays gameboard
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // checks if player has revealed all letters
    checkForWin() {
        const phraseLetters = document.getElementsByClassName('letter');
        const allLetterArr = Array.from(phraseLetters);
        const shownLetters = document.getElementsByClassName('show');
        const shownLetterArr = Array.from(shownLetters);

        return allLetterArr.length === shownLetterArr.length;
    }

    // removes life from scoreboard
    removeLife() {
        const index = 5 - this.missed;

        const heartList = document.getElementsByTagName('ol')[0];
        const heart = heartList.querySelector(`:nth-child(${index})`);
        const image = heart.firstChild;
        image.setAttribute('src', 'images/lostHeart.png');

        this.missed += 1;
        
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // displays start screen when all lives are lost
    gameOver(win) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementsByClassName('game-over-message');
        console.log(message);

        if (!win) {
            overlay.classList.add('lose');
            message.innerHTML = 'Oh no! You did not win. Would you like to try again?';
        } else {
            overlay.classList.add('win');
            message.innerHTML = 'Great job! You are a winner!';
        }

        overlay.style.display = 'block';
    }
    
    // handles all methods for app playability
    handleInteraction() {

    }
} 