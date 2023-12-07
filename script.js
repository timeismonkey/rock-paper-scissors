const welcoming = document.querySelector(".welcome");
const resultContainer = document.querySelector(".result-container");
const buttons = document.querySelectorAll(".choice");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const playerTracker = document.querySelector(".player-tracker");
const computerTracker = document.querySelector(".computer-tracker");
const appleImg = document.querySelector(".apple");
const appleImgString = document.querySelector(".apple").outerHTML;
const bananaImg = document.querySelector(".banana");
const bananaImgString = document.querySelector(".banana").outerHTML;
const churroImg = document.querySelector(".churro");
const churroImgString = document.querySelector(".churro").outerHTML;


const resultElement = document.createElement("div");
resultElement.className = "result";
const playAgainButton = document.createElement("button");
playAgainButton.className = "play-again grow";
playAgainButton.textContent = "Play again";

let playerScore = 0;
let computerScore = 0;

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
        return `Computer wins! ${firstLetterUpper(computerChoice)} beats ${firstLetterUpper(playerChoice)}.`;
    }
    // Player wins
    else if (
        (playerChoice === "apple" && computerChoice === "churro") ||
        (playerChoice === "banana" && computerChoice === "apple") ||
        (playerChoice === "churro" && computerChoice=== "banana")
    ) {
        playerScore++;
        return `You win! ${firstLetterUpper(playerChoice)} beats ${firstLetterUpper(computerChoice)}.`;
    }
    else {
        return "Tie"; 
    }
}

// Update tracker
function updateTracker(computerChoice, playerChoice) {
    if ((computerChoice === "apple") || (playerChoice === "apple")) {
        if (computerChoice === playerChoice) {
            computerTracker.innerHTML += appleImgString;
            playerTracker.innerHTML += appleImgString;
            return
        }
        computerChoice === "apple" ? computerTracker.innerHTML += appleImgString : playerTracker.innerHTML += appleImgString;
    } 
    if ((computerChoice === "banana") || (playerChoice === "banana")) {
        if (computerChoice === playerChoice) {
            computerTracker.innerHTML += bananaImgString;
            playerTracker.innerHTML += bananaImgString;
            return
        }
        computerChoice === "banana" ? computerTracker.innerHTML += bananaImgString : playerTracker.innerHTML += bananaImgString;
    }
    if ((computerChoice === "churro") || (playerChoice === "churro")) {
        if (computerChoice === playerChoice) {
            computerTracker.innerHTML += churroImgString;
            playerTracker.innerHTML += churroImgString;
            return
        }
        computerChoice === "churro" ? computerTracker.innerHTML += churroImgString : playerTracker.innerHTML += churroImgString;
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
        button.classList.remove('grow');
        button.style.opacity = "0.5";
    })
}

function enableButtons() {
    buttons.forEach((button) => {
        button.disabled = false;
        button.classList.add("grow");
        button.style.opacity = "1";
    })
}
// Reset game
function reset(e) {
    playerScore = 0;
    computerScore = 0;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(welcoming);
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    playerTracker.innerHTML = ""
    computerTracker.innerHTML = ""
    enableButtons();
}

playAgainButton.addEventListener("click", (e) => {
    reset(e);
});

// Simulate playing a round when a button is pressed
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const computerChoice = getComputerChoice();
        const playerChoice = event.target.className;
        const result = playRound(playerChoice, computerChoice);
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;

        // Update player/computer tracker
        updateTracker(computerChoice, playerChoice);

        // Check if winner
        if (checkForWinner()) {
            setTimeout(() => {
                showGameWinner(getWinner());
            }, 0);
            disableButtons();
        } else {
            resultElement.textContent = result;
            // Show round winner
            resultContainer.innerHTML = "";
            resultContainer.appendChild(resultElement);
        }
    })
});