let playerScore = 0;
let computerScore = 0;
let winner;
const welcoming = document.querySelector(".welcome");
const resultContainer = document.querySelector(".result-container");
const resultElement = document.createElement("div");
resultElement.className = "result";
const playAgainButton = document.createElement("button");
playAgainButton.className = "play-again"; 
playAgainButton.textContent = "Play again";
const buttons = document.querySelectorAll(".choice");

function firstLetterUpper(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

 // Randomly generate a choice between: apple, banana and churro
 function getComputerChoice(){
     const choices = ["apple", "banana", "churro"];
     // Get a random index between 0 and 2
     const randElement = choices[Math.floor(Math.random() * choices.length)]; 
     return randElement;
 }

// Simulate a single round of apple banana churro, taking playerSelection and computerSelection as input
function playRound(playerChoice, computerChoice) {
    // Convert input to lowercase 
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    // Computer wins
    if (
        (playerChoice === "apple" && computerChoice === "banana") ||
        (playerChoice === "banana" && computerChoice === "churro") ||
        (playerChoice === "churro" && computerChoice === "apple")
    ) {
        // Increment the score of winning party
        computerScore++;
        return `Computer wins this round! ${firstLetterUpper(computerChoice)} beats ${firstLetterUpper(playerChoice)}.`;
    }
    // Player wins
    else if (
        (playerChoice === "apple" && computerChoice === "churro") ||
        (playerChoice === "banana" && computerChoice === "apple") ||
        (playerChoice === "churro" && computerChoice=== "banana")
    ) {
        playerScore++;
        return `Player wins this round! ${firstLetterUpper(playerChoice)} beats ${firstLetterUpper(computerChoice)}.`;
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
        return "Computer Wins!"
    }
    return "You Win!"
}

// Show game winner
function showGameWinner(winner) {
    // Update results sections to show winner and play again button
    resultElement.textContent = winner;
    resultContainer.appendChild(playAgainButton);    
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

// Reset game
function reset(e){
    playerScore = 0;
    computerScore = 0;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(welcoming);
}

playAgainButton.addEventListener("click", (e) => {
    reset(e);
})

// Simulate playing a round when a button is pressed
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
            setTimeout(() => {
                showGameWinner(getWinner());
            }, 0);
            // Reset game
            disableButtons();
            // End game
        } else {
            // resultElement.textContent = result;
            winner = result;
            resultElement.textContent = winner;
            // Show round winner
            resultContainer.innerHTML = "";
            resultContainer.appendChild(resultElement);
        }
    })
})