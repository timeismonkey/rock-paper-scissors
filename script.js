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

     // Go through each possible outcome
     if (playerChoice === "rock" && computerChoice === "paper") {
        // Increment the score of winning party
         computerScore++
        //  Return a string explaining the result of the round
         return "Computer wins this round! Paper beats rock.";
     }
     else if (playerChoice === "rock" && computerChoice === "scissors") {
         playerScore++
         return "Player wins this round! Rock beats scissors.";
     }
     else if (playerChoice === "paper" && computerChoice === "rock") {
         playerScore++
         return "Player wins this round! Paper beats rock.";
     }
     else if (playerChoice === "paper" && computerChoice === "scissors") {
         computerScore++
         return "Computer wins this round! Scissors beats paper.";
     }
     else if (playerChoice === "scissors" && computerChoice === "rock") {
         computerScore++
         return "Computer wins this round. Rock beats scissors.";
     }
     else if (playerChoice === "scissors" && computerChoice=== "paper") {
         playerScore++
         return "Player wins this round. Scissors beats paper.";
     }
     else {
         return "Tie"; 
     }
 }

// Add event listener calling playRound for each button
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const playerChoice = event.target.textContent;
        
        console.log(playRound(playerChoice, computerChoice));
    })
})