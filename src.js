const playGameBtn = document.querySelector("#get-choice-btn");

const getComputerChoice = () => {
  let randomNumber = Math.random();
  let computerChoice;
  if (randomNumber >= 0 && randomNumber <= .33){
    return computerChoice = "rock";
  } else if (randomNumber > .33 && randomNumber <= .66) {
    return computerChoice = "paper";
  } else if (randomNumber > .66 && randomNumber <= 1){
    return computerChoice = "scissors";
  }
};

const getHumanChoice = () => {
  let getChoice = prompt('Choose: Rock, Paper, or Scissors');
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

playGameBtn.addEventListener('click', () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let [ humanPoints, computerPoints ] = playRound(humanSelection, computerSelection);

  if (humanPoints === 0 && computerPoints === 0) {

  } else if (humanPoints === 0 && computerPoints !== 0){
    computerTotal = computerTotal + computerPoints;
  } else if (humanPoints === 1) {
    humanTotal = humanTotal + humanPoints;
  }

  console.log(humanPoints);
  console.log(computerPoints);
  console.log(computerTotal);
  console.log(humanTotal);

});


