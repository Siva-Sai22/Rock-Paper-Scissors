function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber===0) return "rock";
    else if(randomNumber===1) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.trim();
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "Its a draw!";
    }else if(playerSelection==="rock" && computerSelection==="paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection==="rock" && computerSelection==="scissor"){
        return "You Won! Rock beats Scissor";
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You Won! Paper beats Rock";
    }else if(playerSelection==="paper" && computerSelection==="scissor"){
        return "You Lose! Scissor beats Paper";
    }else if(playerSelection==="scissor" && computerSelection==="paper"){
        return "You Won! Scissor beats Paper";
    }else if(playerSelection==="scissor" && computerSelection==="rock"){
        return "You Lose! Scissor beats Rock";
    }
}

let playerCounter=0;
let computerCounter=0;

const result_div = document.querySelector('.result');
const final_result = document.querySelector('.final-result');
const scorecard = document.querySelector('.scorecard');
const play_again = document.querySelector('.play-again')

function updateScorecard(result){
    if(result.slice(0,7)==="You Won"){
        playerCounter++;
    }else if(result.slice(0,7)==="You Los"){
        computerCounter++;
    }
    scorecard.textContent = `${playerCounter} - ${computerCounter}`;
    if(playerCounter === 5){
        final_result.textContent = 'Congrats! You Won the game';
    }else if(computerCounter === 5){
        final_result.textContent = 'You Lost the game!';
    }
}

function afterClick(playerSelection){
    if(playerCounter === 5 || computerCounter === 5){
        return;
    }
    result = playRound(playerSelection,getComputerChoice());
    result_div.textContent = result;
    updateScorecard(result);
}

function resetCounter(){
    playerCounter = 0;
    computerCounter = 0;
    scorecard.textContent = `${playerCounter} - ${computerCounter}`;
    result_div.textContent = 'Click on the buttons to play!';
    final_result.textContent = 'The battle is going on.';
}

const buttons = document.querySelectorAll('.play');
buttons.forEach(button => {
    button.addEventListener('click',() => afterClick(button.textContent));
});

play_again.addEventListener('click', () => resetCounter());