/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// VARIABLES
let game;
const startButton = document.getElementById('btn__reset');
const keyButtons = document.getElementsByClassName('key');
const keyArray = Array.from(keyButtons);

// CONSTRUCTS NEW GAME UPON START BUTTON 'CLICK'
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// SCREEN KEY FUNCTIONALITY
keyArray.forEach( (key) => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});

// KEYBOARD FUNCTIONALITY
addEventListener('keydown', (input) => {
    const keyButtons = document.getElementsByClassName('key');
    const keyArray = Array.from(keyButtons);

    keyArray.forEach( (key) => {
        if (input.key.toString() === key.innerHTML && !key.classList.contains('wrong' || 'chosen')) {
            const keyBtn = key;
            game.handleInteraction(keyBtn);
        }
    });    
})
