'use strict';
// console.log((document.querySelector('#guess').value = 'dileep & surya'));
/* let score = 20;
console.log(score);
score += 2;
console.log(score); */

// document.getElement('body').innerHTML = 'Surya';
// console.log((document.querySelector('.between').value = 'suryaDileep'));

/* Number((document.querySelector('.guess').value = 'surya'));
console.log(document.querySelector('.guess').value); */

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

/* document.querySelector('.again').addEventListener('click', function () {
  console.log(document.querySelector('.number'));
}); */

// function add() {
//   alert('Good Morning');
// }

// function wish() {
//   {
//     let x = document.getElementById('fname');
//     let y = document.getElementById('lname');
//     x.value = x.value.toUpperCase();
//     y.value = y.value.toLowerCase();
//   }
// }

// function myFunction() {
//   document.getElementById('demo').innerHTML =
//     'You pressed a key inside the input field';
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    displayMessage('❌no Number,Please input a number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🤩super,it is a correct guess ');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🤣🤷‍♀️you lost the game');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('startguessing.....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
