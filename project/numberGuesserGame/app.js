/* 
Game Functions
-player must guesss a number between a min and max
- Player Gets a certain amount of guesses
- Notifying player of guess remaining
- notify the player of the correct answer if loose
- Let Player Choose to play again
*/
// Game Values

// setTimeout befor the game starting
const playGame = document.querySelector('#play-game');
const container3 = document.querySelector('.container3')
const container2 = document.querySelector('.container2');
const container1 = document.querySelector('.container1')
playGame.addEventListener('click', function(){
  setTimeout(loading,10);
})
function loading(){
container1.style.display = 'none'
container3.style.display = 'block'
setTimeout(gameWrapper,1500);
}
let max = 10,
    min = 1,
    guessLeft = 3;

    // UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message'),
      tries = document.querySelector('span#tries'),
      tryAgain = document.querySelector('span#try-again');


// Assign UI min and Max Number
minNum.textContent = min;
maxNum.textContent = max;
tries.textContent = guessLeft;

function gameWrapper(){
  container2.style.display = 'block'
 container3.style.display = 'none'
let winningNum = getRandomNum(min,max);

// Listen to Submit Button
guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value);

  // Set Validation for Input Number
  if (isNaN(guess) || guess < min || guess > max ){
  // console.log(guess)
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  else {
    guessLeft -=1;

    if (guessLeft === 0){
      guessInput.disabled = true;
      loss(`Sorry! Game Over, YOU LOSS, ${winningNum} was correct`, 'red')
    }
    else {
      retry(`${guess} is incorrect, ${guessLeft} guesses left`, 'black')
    }
  }
  if (guess === winningNum){
    guessInput.disabled = true;
    won (`Horrey! YOU WON, ${guess} is correct answer`, 'green')
  }

});


// play again
function playAgain(){
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

game.addEventListener('mousedown', function(e){

  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})
}
// set message function
function setMessage(msg,color){
  message.textContent=msg;
  message.style.color = color;
}
// set WON Template
function won (msg,color){
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.border = `2px ${color} solid`
  guessInput.disabled = true;
  setTimeout(playAgain , 1);
}
// Set LOSS Template
function loss(msg , color){
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.border = `2px ${color} solid`;
  guessInput.disabled = true;
  setTimeout(playAgain , 1);
}
// set RETRY Template
function retry(msg,color){
  message.textContent = msg;
  message.style.color = color;
  guessInput.value='';
  guessInput.style.borderColor = color;
}

// Get Winning Numbers
function getRandomNum(min,max){
  return Math.ceil(Math.random()*(max-min+1))
}}