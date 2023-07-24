function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function addEventListeners() {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", function() {
        playRound("rock", getComputerChoice());
    });

    paperButton.addEventListener("click", function() {
        playRound("paper", getComputerChoice());
    });

    scissorsButton.addEventListener("click", function() {
        playRound("scissors", getComputerChoice());
    });
}

function updateResults(result) {
    const resultsDiv = document.getElementById("results");
    const resultText = document.createElement("p");
    resultText.textContent = result;
    resultsDiv.appendChild(resultText);
}

let playerScore = 0;
let computerScore = 0;



function announceWinner() {
    let winner;
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (playerScore < computerScore) {
        winner = "Computer";
    } else {
        winner = "It's a tie!";
    }

    const winnerDiv = document.getElementById("score");
    const winnerText = document.createElement("p");
    winnerText.textContent = `Winner: ${winner}`;
    winnerDiv.appendChild(winnerText);
}

function game() {

    addEventListeners();
}

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        let result;

        if (playerSelection === "paper" && computerSelection === "rock") {
            result = "You win! Paper beats Rock";
            playerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "You win! Scissors beats Paper";
            playerScore++;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "You win! Rock beats Scissors";
            playerScore++;
        } else if (playerSelection === computerSelection) {
            result = "It's a tie!";
        } else {
            result = "You lose! Try again";
            computerScore++;
        }

        updateResults(result);
        const scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    }

    // The game loop can be removed, as we are handling user input through the button clicks.
    // ...

    // Display the final result when the game ends (if you want)
    // ...

    // Other game logic or ending conditions can be added here (if needed)
    // ...


game();
