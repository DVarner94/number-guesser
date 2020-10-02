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
        // game over, won
        gameOver(true, `${winningNum} is correct!`)
    } else {
        // wrong number
        guessesLeft -= 1

        if (guessesLeft === 0) {
            // game over, lost
            gameOver(false, `Game over, the winning number was ${winningNum}`)
        } else {
            // game continues - answer is wrong

            // change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Message
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses remaining`)
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable the input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set winner message
    setMessage(msg)
}

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};
