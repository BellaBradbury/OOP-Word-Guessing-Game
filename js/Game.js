/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// GAME CLASS
class Game {
    // create and initialize 'missed', 'phrases', & 'activePhrase' objects
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('my great adventure has begun'),
            new Phrase('some things are meant to be'),
            new Phrase('do not try to make me grow up before my time'),
            new Phrase('i have lived for loving you'),
            new Phrase('i will shine as brightly as the sun')
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
        
        if (this.missed === 5) {
            this.gameOver();
        }        

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
        const message = document.getElementById('game-over-message');

        if (!win) {
            overlay.classList.add('lose');
            overlay.classList.remove('win');
            message.innerHTML = 'Oh no! You did not win. Would you like to try again?';
        } else {
            overlay.classList.add('win');
            overlay.classList.remove('lose');
            message.innerHTML = 'Great job! You are a winner!';
        }

        overlay.style.display = 'flex';

        // reset game
        const phraseLetters = document.getElementsByTagName('ul')[0].innerHTML = '';

        const keyButtons = document.getElementsByClassName('key');
        const keyArray = Array.from(keyButtons);
        keyArray.forEach( (key) => {
            key.classList.remove('chosen', 'wrong');
            key.classList.add('key');
            key.removeAttribute('disabled');
        });

        const heartList = document.getElementsByTagName('ol')[0].children;
        const heartArr = Array.from(heartList);
        heartArr.forEach( (heart) => {
            const image = heart.firstChild;
            image.setAttribute('src', 'images/liveHeart.png');
            return image;
        });
    }
    
    // handles all methods for app playability
    handleInteraction(input) {
        input.setAttribute('disabled', 'true');
        if ( this.activePhrase.checkLetter(input.innerHTML) ) {
            input.classList.add('chosen');
            this.activePhrase.showMatchedLetter(input.innerHTML);
            if ( this.checkForWin() ) {
                this.gameOver(true);
            }
        } else {
            input.classList.add('wrong');
            this.removeLife();
        }
    }
} 