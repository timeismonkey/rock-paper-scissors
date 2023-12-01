let playerScore = 0;
let computerScore = 0;
let winner;
const resultElement = document.querySelector(".result");
const playAgainButton = document.querySelector(".play-again")

 // Randomly generate a choice between: Rock, Paper and Scissors
 function getComputerChoice(){
     const choices = ["rock", "paper", "scissors"];
     // Get a random index between 0 and 2
     const randElement = choices[Math.floor(Math.random() * choices.length)]; 
     return randElement;
 }

// Simulate a single round of rock paper scissors, taking playerSelection and computerSelection as input
function playRound(playerChoice, computerChoice) {
    // Convert input to lowercase 
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    // Computer wins
    if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")
    ) {
        // Increment the score of winning party
        computerScore++;
        return `Computer wins this round! ${computerChoice} beats ${playerChoice}.`;
    }
    // Player wins
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice=== "paper")
    ) {
        playerScore++;
        return `Player wins this round! ${playerChoice} beats ${computerChoice}.`;
    }
    else {
        return "Tie"; 
    }
}

// Check for winner
function checkForWinner() {
    return computerScore === 5 || playerScore === 5
}

// Get winner
function getWinner () {
    if (computerScore === 5) {
        return "computer"
    }
    return "player"
}

// Show game winner
function showGameWinner(winner) {
    // Update results sections to show winner and play again button
    resultElement.textContent = winner;
    playAgainButton.style.display = "block";
}

// Reset game
function reset(){
    
}

// Simulate playing a round when a button is pressed
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const computerChoice = getComputerChoice();
        const playerChoice = event.target.textContent;
        const result = playRound(playerChoice, computerChoice);
        const playerScoreElement = document.querySelector(".player-score");
        const computerScoreElement = document.querySelector(".computer-score");
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;

        // Check if winner
        if (checkForWinner()) {
            if (getWinner() === "computer"){
                setTimeout(() => {
                    showGameWinner("Computer wins!")
                }, 0);
                // Reset game
            } else {
                setTimeout(() => {
                    showGameWinner("You won!")
                }, 0);
                // Reset game
            }
            // End game
        } else {
            // resultElement.textContent = result;
            winner = result;
            // Show round winner
            resultElement.textContent = winner;
        }

    })
})