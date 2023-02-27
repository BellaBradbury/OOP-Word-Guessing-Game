/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// VARIABLES
const startButton = document.getElementById('btn__reset');
var game;

// CONSTRUCTS NEW GAME UPON START BUTTON 'CLICK'
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});