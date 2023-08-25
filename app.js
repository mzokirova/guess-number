'use strict';
// const container = document.querySelector('.container');
// const myBtn = container.querySelector('button');
// const input = container.querySelector('input');
let checkBtn = document.getElementById('check-btn');
let resetBtn=document.getElementById('restart');
const random = Math.floor(Math.random() * 10) + 1;
 let chance = 5;
 function guessNumber() {
    // const container = document.querySelector('.container');
    
   
     const numGuess = document.getElementById('num-guess');
    const userGuess = parseInt(document.getElementById('userGuess').value);
 
    const message = document.getElementById('message');
     if (userGuess > random) {
         message.textContent = 'Too high .Try again ';
         message.style.color = 'red';
         chance--;
         numGuess.textContent = `Number of Guesses: ${chance}`; 
      if (chance < 0) {
             numGuess.textContent = 'You do not have chances.Reset it';
         }
    
    }
    else if (userGuess < random) {
        message.style.color = 'red';
        message.textContent = 'Too low.Try again';
        chance--;
         numGuess.textContent = `Number of Guesses: ${chance}`;
         if (chance < 0) {
             numGuess.textContent = 'You do not have chances.Reset it';
         }

    }
     else {
         message.textContent = 'Congratulation .You win';

    }

}

function reset() {
   window.location.reload();
    
}

checkBtn.onclick = guessNumber;
resetBtn.onclick = reset;
