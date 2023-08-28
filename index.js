
function game(){

let userScore = '0'
let computerScore = '0'


function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return console.log('You lose, paper bears rock.'), computerScore++
    }else if(playerSelection == 'rock' && computerSelection == 'cissor'){
        return console.log('You won, rock beats cissor.'), userScore++
    }else if(playerSelection == 'paper' && computerSelection=='cissor'){
        return console.log('You lose, cissor beats paper'), computerScore++
    }else if(playerSelection == 'paper' && computerSelection=='rock'){
        return console.log('You won, paper beats rock'), userScore++
    }else if(playerSelection=='cissor' && computerSelection=='rock'){
        return console.log('You lose, rock beats cissor'), computerScore++
    }else if(playerSelection =='cissor' && computerSelection=='paper'){
        return console.log('You won, cissor beats paper'), userScore++
    }else{
        return console.log('Even')
    }
}

while(userScore < 5 && computerScore < 5){

const playerSelection = prompt('paper, cissor or rock: ')
if(playerSelection === null){
    alert('canceled');
    break;
}
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection)

console.log(`your score is ${userScore}`)
console.log(`computer score is ${computerScore}`)

}
if(userScore > computerScore){
    console.log(`YOU WIN!    your score: ${userScore} and computer score: ${computerScore}`)
}else if(userScore < computerScore){
    console.log(`YOU LOSE!   your score: ${userScore} and computer socre: ${computerScore}`)
}else{
    console.log(`ITS TIE!    your score: ${userScore} and computer score: ${computerScore}`)

}
}
function getComputerChoice(){
    const choices = ['rock','paper','cissor'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)];
    return randomElement;
}

console.log(game())