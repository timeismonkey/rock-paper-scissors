 // Keep track of score
 let playerScore = 0
 let computerScore = 0


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
         computerScore++
         return `Computer wins this round! ${computerChoice} beats ${playerChoice}.`;
     }
    // Player wins
     else if (playerChoice === "rock" && computerChoice === "scissors" || (playerChoice === "paper" && computerChoice === "rock")
     || (playerChoice === "scissors" && computerChoice=== "paper")) {
         playerScore++
         return `Player wins this round! ${playerChoice} beats ${computerChoice}.`;
     }
     else {
         return "Tie"; 
     }
 }

// Simulate playing a round when a button is pressed
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const playerChoice = event.target.textContent;

        // Display results
        const result = document.querySelector(".result");
        result.textContent = playRound(playerChoice, computerChoice);
    })
})

