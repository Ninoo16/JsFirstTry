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
    if(playerSelection === "paper" && computerSelection === "rock") {
    return "You Lose! Paper beats Rock" ;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "you lose! Scissors beats paper" ;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "you lose! Scissors beat paper" ;
    } else {
        return " you win! congrats";
    }
}

