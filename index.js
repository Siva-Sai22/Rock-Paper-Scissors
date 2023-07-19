function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber===0) return "rock";
    else if(randomNumber===1) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection){
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

const playerSelection = "Scissor";
const computerSelection=getComputerChoice();

console.log(playRound(playerSelection,computerSelection));