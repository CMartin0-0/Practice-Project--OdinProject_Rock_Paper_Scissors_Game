const playGameBtn = document.querySelector("#play-btn");

const getComputerChoice = () => {
  let randomNumber = Math.random();
  let computerChoice;
  if (randomNumber >= 0 && randomNumber <= .33){
    return computerChoice = "rock";
  } else if (randomNumber > .33 && randomNumber <= .665) {
    return computerChoice = "paper";
  } else if (randomNumber > .665 && randomNumber <= 1){
    return computerChoice = "scissors";
  }
};

const getHumanChoice = () => {
  let getChoice = prompt('Choose: Rock, Paper, or Scissors');
  if (getChoice === null){
    alert("Game in progress was canceled! If window does not refresh automatically after closing this, pleased manually refresh and start a new game.")
    window.location.reload();
  }
  let formattedChoice = getChoice.toLowerCase();
  let humanChoice;
  if (formattedChoice === 'rock'){
    humanChoice = 'rock';
    return humanChoice;
  } else if (formattedChoice === 'paper') {
    humanChoice = 'paper';
    return humanChoice;
  } else if (formattedChoice === 'scissors') {
    humanChoice = 'scissors';
    return humanChoice;
  } else {
    return alert("Not a valid input. Please choose one of the following: Rock, Paper, or Scissors.")
  }

}

const playRound = (humanChoice, computerChoice) => {
let humanScore = 0;
let computerScore = 0;

if (humanChoice === 'rock') {
  if (computerChoice === 'rock'){
    console.log("Draw! Rock ties Rock")
  } else if (computerChoice === 'paper') {
    console.log("You lose! Paper beats Rock");
    computerScore++
  } else if (computerChoice === 'scissors') {
    console.log("You win! Rock beats Scissors")
    humanScore++
  }
} else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
			console.log('You win! Paper beats Rock');
      humanScore++
		} else if (computerChoice === 'paper') {
			console.log('Draw! Paper ties Paper');
		} else if (computerChoice === 'scissors') {
			console.log('You lose! Scissors beats Paper');
			computerScore++;
		}
} else if (humanChoice === "scissors") {
    if (computerChoice === 'rock') {
			console.log('You lose! Rock beats Scissors');
      computerScore++
		} else if (computerChoice === 'paper') {
			console.log('You win! Scissors beats Paper');
			humanScore++;
		} else if (computerChoice === 'scissors') {
			console.log('Draw! Scissors ties Scissors');
		}
}

return [ 
  humanScore,
  computerScore
]
}
let computerTotal = 0;
let humanTotal = 0;

const playGame = (roundNumber) => {
 const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let [ humanPoints, computerPoints ] = playRound(humanSelection, computerSelection);

  if (humanPoints === 0 && computerPoints === 0) {

  } else if (humanPoints === 0 && computerPoints !== 0){
    computerTotal = computerTotal + computerPoints;
  } else if (humanPoints === 1) {
    humanTotal = humanTotal + humanPoints;
  }

  console.log("Your score this round: " + humanPoints);
  console.log("Computer's score this round: " + computerPoints);
  console.log("Computer's Total Score: " + computerTotal);
  console.log("Your Total Score: " + humanTotal);

  if (roundNumber + 1 === 5){
    if (humanTotal > computerTotal){
      console.log("Game Over! Well played, you defeated the computer, with the final score of: " + humanTotal + " to " + computerTotal);
      alert("Game Over! Well played, you defeated the computer, with the final score of: " + humanTotal + " to " + computerTotal);
      window.location.reload();
    } else if (humanTotal < computerTotal) {
      console.log("Game Over! Better luck next time, the computer won this one, with a final score of: " + computerTotal + " to " + humanTotal);
      alert("Game Over! Better luck next time, the computer won this one, with a final score of: " + computerTotal + " to " + humanTotal);
      window.location.reload();
    } else {
      console.log("Game Over! It was an even match, ending in a tie, with a final score of: " + humanTotal + " to " + computerTotal);
      alert("Game Over! It was an even match, ending in a tie, with a final score of: " + humanTotal + " to " + computerTotal);
      window.location.reload();
    }   
  }
  }



playGameBtn.addEventListener('click', () => {

for (let i = 0; i < 5; i++){
  playGame(i);
}
});


