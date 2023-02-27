/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// VARIABLES
var game;
const startButton = document.getElementById('btn__reset');
const keyButtons = document.getElementsByClassName('key');
const keyArray = Array.from(keyButtons);

// CONSTRUCTS NEW GAME UPON START BUTTON 'CLICK'
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

keyArray.forEach( (key) => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});

