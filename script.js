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
 function playRound(playerSelection, computerSelection) {
     // Convert input to lowercase 
     playerSelection = playerSelection.toLowerCase()
     computerSelection = computerSelection.toLowerCase()

     // Go through each possible outcome
     if (playerSelection === "rock" && computerSelection === "paper") {
        // Increment the score of winning party
         computerScore++
        //  Return a string explaining the result of the round
         return "Computer wins this round! Paper beats rock.";
     }
     else if (playerSelection === "rock" && computerSelection === "scissors") {
         playerScore++
         return "Player wins this round! Rock beats scissors.";
     }
     else if (playerSelection === "paper" && computerSelection === "rock") {
         playerScore++
         return "Player wins this round! Paper beats rock.";
     }
     else if (playerSelection === "paper" && computerSelection === "scissors") {
         computerScore++
         return "Computer wins this round! Scissors beats paper.";
     }
     else if (playerSelection === "scissors" && computerSelection === "rock") {
         computerScore++
         return "Computer wins this round. Rock beats scissors.";
     }
     else if (playerSelection === "scissors" && computerSelection === "paper") {
         playerScore++
         return "Player wins this round. Scissors beats paper.";
     }
     else {
         return "Tie"; 
     }
 }

 // Simulate 5 rounds, keeping track of score
 function game() {
     // Run 5 times
     for (let i = 0; i < 5; i++) {
         // Ask player for selection
         let playerSelection = prompt("Rock, Paper or Scissors...");
         // Get computers selection
         let computerSelection = getComputerChoice();
         
         // Simulate a round, saving result to result
         let result = playRound(playerSelection, computerSelection);
         console.log(result)
     }

     // Compare scores, printing the winner
     if (playerScore > computerScore) {
         return "Player wins!"
     } else if (computerScore > playerScore) {
         return "Computer wins!"
     } else {
         return "It is a tie!"
     } 
 }

console.log(game())