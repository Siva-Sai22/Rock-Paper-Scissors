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

function game(){
    let playerCounter=0;
    let computerCounter=0;
    let getGoing=true;

    while(getGoing){
        const playerSelection = prompt("Enter your choice.");
        const computerSelection=getComputerChoice();
        let result=playRound(playerSelection, computerSelection);
        console.log(result);
        result=result.slice(0,7);

        if(result==="You Won"){
            playerCounter++;
        }else if(result==="You Los"){
            computerCounter++;
        }
        console.log(playerCounter,computerCounter);
        if(playerCounter===5 || computerCounter===5){
            getGoing=false;
        }
    }

    if(playerCounter===5) console.log("Congrats! You Won the game");
    else console.log("You Lost the game!");
}

game();