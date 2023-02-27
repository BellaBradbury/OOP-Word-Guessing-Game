/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// PHRASE CLASS
class Phrase {
    // create and initialize 'phrase' object
    constructor(phrase) {
        this.phrase = phrase;
    }

    // adds placeholder letters to gameboard upon start
    addPhraseToDisplay() {
        const letterArr = this.phrase.split('');
        const letterBoard = document.getElementsByTagName('ul')[0];

        letterArr.forEach( (letter) => {
            const li = document.createElement('li');
            li.innerHTML = letter;

            if (letter !== ' ') {
                li.classList.add('hide', 'letter', letter);
            } else {
                li.classList.add('space');
            }

            letterBoard.appendChild(li);
        });
    }

    // checks if user letter matches phrase letter
    checkLetter() {

    }

    // reveals matching phrase letter to user input
    showMatchedLetter() {
        
    }
} 