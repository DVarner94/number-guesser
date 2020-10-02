// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for a guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // validate input
    if (guess === NaN || guess < min || guess > max) {
        setMessage(`Please enter number between ${min} and ${max}`, `red`)
    }


    // check if winner
    if (guess === winningNum) {
        // disable the input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = 'green';
        // set winner message
        setMessage(`${winningNum} is correct!`, 'green')
    } else {

    }
});

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};
