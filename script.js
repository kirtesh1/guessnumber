'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; 

let score = 20;

document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
        console.log(guess , typeof guess);
    
    if (!guess) {
        document.querySelector('.message').textContent = 'NO number!'; 
    }else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'correct number!'; 
    }else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too high!'; 
            score--;
            document.querySelector('.score').textContent =  score;
        }else{
            document.querySelector('.message').textContent = 'You Lost the game!'; 
        }
    }else{
        if(score > 0){
            document.querySelector('.message').textContent = 'Too low!'; 
            score--; 
            document.querySelector('.score').textContent =  score;
        }else{
            document.querySelector('.message').textContent = 'You Lost the game!'; 
        }
    }
}
);
