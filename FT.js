function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0:
            return "rock";
            case 1:
                return "paper";
                case 3:
                    return "scissors";
    }
}
console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    

    if(playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock" ;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "you win! Scissors beats paper" ;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "you win! rock beat scissors" ;
    } else {
        return " you lose! try again";
    }

}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    while (round <= 5) {
        const playerSelection = prompt("enter your choice: rock, paper, scissors");
        const computerSelection = ["rock", "paper","scissors"]
        [Math.floor(Math.random()*3)];
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++
        }
        console.log(`player score: ${playerScore} computer score ${computerScore}`);
        round++;
    }
}
    
