
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0:
            return "rock";
            case 1:
                return "paper";
                case 2:
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
    
    while (true) {
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
        
    }
}
// Function to handle the button clicks

function updateScore(result) {
    let playerScore =0;
    let computerScore = 0;
    if(result.includes("win")) {
        playerScore++;
    } else if(result.includes("lose")) {
        computerScore++;
    }
    console.log(`player score: ${playerScore} computer score ${computerScore}`);
}

function handleClick(event) {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
  
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
    updateScore(result);
}

  // Add event listeners to the buttons
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  
  rockButton.addEventListener("click", handleClick);
  paperButton.addEventListener("click", handleClick);
  scissorsButton.addEventListener("click", handleClick);

let computerScore = 0
let playerScore = 0



    
