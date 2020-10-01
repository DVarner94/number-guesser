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
    if(guess === Nan || guess < min || guess > max){
        errMessage(`Please enter number between ${min} and ${max}`)
    }
})

// error message
errMessage
