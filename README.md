# JsFirstTry
*// Understanding the problem:
i need to make a game of "rock, paper, scissors" to play against the computer

*// pseudocode:
-create a function called getComputerChoice().
-generate a random number between 0 and 2.
-use switch statement to return "rock, paper, scissors" based on the random number.
-create a function with two parameters (playerSelection, computerSelection) that plays a round of the game.
-convert playerSelection to lowerCase and make it case-insensitive. 
-determine the winner based on the selections.
-write a new function called game() using the previous function inside to play a 5 round game that keeps score and reports a winner or loser at the end.


OLD CODE:


let computerScore = 0
let playerScore = 0
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
     
    
    while (true) {
        const playerSelection = prompt("enter your choice: rock, paper, scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++
        }
        console.log(`player score: ${playerScore} computer score ${computerScore}`);
        
        if (playerScore === 5 || computerScore === 5) {
           announceWinner();
           //reset the score to 0 after annoncing the winner 
           playerScore = 0;
           computerScore = 0;
    }
}
};
// Function to handle the button clicks

function updateScore(result) {
    const scoreDsplay = document.getElementById("score");
    scoreDsplay.textContent= `player score: ${playerScore} computer score ${computerScore}`;

    if(result.includes("win")) {
        playerScore++;
    } else if(result.includes("lose")) {
        computerScore++;
    }
    console.log(`player score: ${playerScore} computer score ${computerScore}`);

   

    if (playerScore === 5) {
            console.log("Congratulations! You won the game!");
           return;
        } else if (computerScore === 5) {
            console.log("Oops! Computer won the game!");
           return;
        }
    
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

  function announceWinner(message) {
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = message;

    // Disable button event listeners to prevent further rounds
    rockButton.removeEventListener("click", handleClick);
    paperButton.removeEventListener("click", handleClick);
    scissorsButton.removeEventListener("click", handleClick);

    // Update the score display with the final scores
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;

  }
  