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
            let letterClasses = ['hide', 'letter', letter];

            const li = document.createElement('li');
            li.innerHTML = letter;

            if (letter !== ' ') {
                li.classList.add(...letterClasses);
            } else {
                li.classList.add('space');
            }

            letterBoard.appendChild(li);
        });
    }

    // checks if user letter matches phrase letter
    checkLetter = (input) => {
        return this.phrase.includes(input);
    }

    // reveals matching phrase letter to user input
    showMatchedLetter = (input) => {
        const phraseLetters = document.getElementsByClassName('letter');
        const letterArr = Array.from(phraseLetters);

        letterArr.forEach( (letter) => {
            if ( input === letter.innerHTML.toLowerCase() ) {
                letter.classList.remove('hide');
                letter.classList.add('show');
            }
        });
    }
} 