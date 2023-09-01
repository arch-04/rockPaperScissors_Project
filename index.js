let userScore = 0
let computerScore = 0
let matchResult = ''

document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.container button')
const userResult = document.querySelector('.userResult h3')

const computerResult = document.querySelector('.userResult .computerResult')
const roundInfo = document.querySelector('.roundResult h3')


const winResultElement = document.querySelector('.winResult h1');
const loseResultElement = document.querySelector('#loseResult')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const userChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        endMatch();
    });
});

function playRound(playerSelection, computerSelection){
    let roundResult = ''

    if(playerSelection == 'rock' && computerSelection == 'paper'){
    roundResult = 'You lost this round, paper beats rock!' 
    computerScore++
    }else if(playerSelection == 'rock' && computerSelection == 'scissor'){
    roundResult = 'You won this round, rock beats scissor!' 
    userScore++
    }else if(playerSelection == 'paper' && computerSelection=='scissor'){
        roundResult = 'You lost this round, scissor beats paper!' 
        computerScore++
    }else if(playerSelection == 'paper' && computerSelection=='rock'){
        roundResult = 'You won this round, paper beats rock!'
         userScore++
    }else if(playerSelection=='scissor' && computerSelection=='rock'){
        roundResult = 'You lost this round, rock beats scissor!' 
        computerScore++
    }else if(playerSelection =='scissor' && computerSelection=='paper'){
        roundResult = 'You won this round, scissor beats paper!'
        userScore++
    }else{
        roundResult = 'This round is Even!'
    }
    userResult.textContent = `Your score is: ${userScore}`
    computerResult.textContent = `Computer socer is: ${computerScore}`
    roundInfo.textContent = roundResult
    console.log(`Your score is ${userScore}`);
    console.log(`Computer score is ${computerScore}`);
}



function getComputerChoice(){
    const choices = ['rock','paper','scissor'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

function endMatch() {

    if (userScore === 5) {
        win = 'You won';
        userScore = 0;
        computerScore = 0;
        winResultElement.textContent = win 
    } else if (computerScore === 5) {
        lose = 'You lose';
        userScore = 0;
        computerScore = 0;
        loseResultElement.textContent = lose 
    }
    else {
        winResultElement.textContent = ''; 
        loseResultElement.textContent = '';
    }
}

})
