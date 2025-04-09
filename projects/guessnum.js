let randomNumber = parseInt(Math.random() * 100 + 1);
/*Generates a random number between 1-100 using Math.random() (which gives 0-0.999)

Multiplies by 100 to get 0-99.999, adds 1 to make 1-100.999

parseInt truncates the decimal to give integer 1-100

*/
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


/*Selects various DOM elements:

Submit button (#subt)

Input field (#guessField)

Display area for previous guesses (.guesses)

Display for remaining guesses (.lastResult)

Message area for high/low feedback (.lowOrHi)

Container for results/restart (.resultParas)
*/


const p = document.createElement('p');

/*Creates a new paragraph element to be used later for the restart button
*/
let prevGuess = [];
let numGuess = 1;


/*
prevGuess: Array to store previous guesses

numGuess: Counter for number of guesses (starts at 1)
*/


let playGame = true;
/*
This is not a built-in JavaScript property - it's a variable you've created to track the game state. Here's the detailed explanation:

Custom Variable:

You're declaring a variable named playGame and setting it to true

This is a common pattern in game development called a "game loop flag" or "game state flag"

Purpose:

Acts as a switch to control whether the game is active/running (true) or not (false)

Used to prevent actions when the game is over (like making new guesses)
*/
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
/*
Adds click handler to submit button

e.preventDefault() prevents form submission/page reload

Gets user input value and converts to integer

Passes guess to validateGuess() function
*/

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

/*
Validates the user input:

Checks if not a number (isNaN)

Checks if < 1

Checks if > 100

If valid:

Adds guess to prevGuess array

If 11th guess (limit reached), ends game

Otherwise, displays guess and checks if correct
*/
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}
/*
Clears input field

Adds guess to previous guesses display

Increments guess counter

Updates remaining guesses display
*/
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
/*
Clears input field

Disables input field

Creates restart button

Adds restart button to DOM

Sets playGame to false

Calls newGame() to set up restart handler
*/
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
/*
Sets up click handler for restart button

Resets game state:

New random number

Clears previous guesses

Resets guess counter

Clears displays

Re-enables input

Removes restart button

Sets playGame back to true
*/