// Display score
let playerScoreElement = document.querySelector(".player-score");
let computerScoreElement = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

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
    if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors")
    || (playerChoice === "scissors" && computerChoice === "rock") ) {
        // Increment the score of winning party
        computerScore++;
        computerScoreElement.textContent = computerScore;
        return `Computer wins this round! ${computerChoice} beats ${playerChoice}.`;
    }
    // Player wins
    else if (playerChoice === "rock" && computerChoice === "scissors" || (playerChoice === "paper" && computerChoice === "rock")
    || (playerChoice === "scissors" && computerChoice=== "paper")) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        return `Player wins this round! ${playerChoice} beats ${computerChoice}.`;
    }
    else {
        return "Tie"; 
    }
}

// Simulate playing a round when a button is pressed
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const computerChoice = getComputerChoice();
        const playerChoice = event.target.textContent;
        const result = document.querySelector(".result");
    
        // Display results
        if (computerScore !== 5 && computerScore !== 5) {
            result.textContent = playRound(playerChoice, computerChoice);
        }

        // Check for winner
        if (computerScore === 5) {
            result.textContent = "Computer Wins!";
            // Reset scores
            let playerScore = 0;
            let computerScore = 0;
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }

        // Check for winner
        if (playerScore === 5) {
            result.textContent = "Player Wins!";
            let playerScore = 0;
            let computerScore = 0;
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }
    })
})
// Keep simulating a round until a player reaches 5 points