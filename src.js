const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundResultMsg = document.querySelector('#round-result-msg');
const matchResultMsg = document.querySelector('#match-result-msg');
const roundNumberDisplay = document.querySelector('#round-number');
const resetBtn = document.querySelector('#reset-btn');


rockBtn.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  const rockBtnChoice = 'rock';
  playRound(rockBtnChoice, computerSelection); 
})

paperBtn.addEventListener('click', () => {
	let computerSelection = getComputerChoice();
	const paperBtnChoice = 'paper';
	playRound(paperBtnChoice, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const scissorsBtnChoice = 'scissors';
	playRound(scissorsBtnChoice, computerSelection);
});




const getComputerChoice = () => {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <= .33){
    return "rock";
  } else if (randomNumber > .33 && randomNumber <= .665) {
    return "paper";
  } else if (randomNumber > .665 && randomNumber <= 1){
    return "scissors";
  }
};

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

const playRound = (humanChoice, computerChoice) => {

let roundWinner;
const humanSelection = humanChoice;
const computerSelection = computerChoice;

if (humanChoice === 'rock') {
  if (computerChoice === 'rock'){
    roundWinner = 'tie'
    roundNumber = roundNumber + 1;
  } else if (computerChoice === 'paper') {
    roundWinner = 'computer';
    computerScore = computerScore + 1;
    roundNumber = roundNumber + 1;
  } else if (computerChoice === 'scissors') {
    roundWinner = 'human';
    humanScore = humanScore + 1
    roundNumber = roundNumber + 1;
  }
} else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
			roundWinner = 'human';
      humanScore = humanScore + 1;
      roundNumber = roundNumber + 1;
		} else if (computerChoice === 'paper') {
			roundWinner = 'tie';
      roundNumber = roundNumber + 1;
		} else if (computerChoice === 'scissors') {
			roundWinner = 'computer';
			computerScore = computerScore + 1;
      roundNumber = roundNumber + 1;
		}
} else if (humanChoice === "scissors") {
    if (computerChoice === 'rock') {
			roundWinner = 'computer';
      computerScore = computerScore + 1
      roundNumber = roundNumber + 1;
		} else if (computerChoice === 'paper') {
			roundWinner = 'human';
			humanScore = humanScore + 1;
      roundNumber = roundNumber + 1;
		} else if (computerChoice === 'scissors') {
			roundWinner = 'tie';
      roundNumber = roundNumber + 1;
		}
}
   

const resetGame = () => {
  roundResultMsg.innerHTML = '';
  matchResultMsg.innerHTML = '';
  computerScoreDisplay.innerHTML = "0";
  humanScoreDisplay.innerHTML = "0";
  roundNumberDisplay.innerHTML = "0";
  humanScore = 0;
  computerScore = 0;
  roundNumber = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  resetBtn.disabled = true;
  resetBtn.hidden = true;
  return 
}

const updateDisplay = (
  computerSelection, 
  humanSelection, 
  roundWinner, 
  roundNumber, 
  humanScore, 
  computerScore
) => {
  
  if (roundWinner === 'human'){
  roundResultMsg.innerHTML = `You won this round! ${humanSelection} beats ${computerSelection}`;
  humanScoreDisplay.innerHTML = ` ${humanScore }`;
  } else if (roundWinner === 'computer') {
    roundResultMsg.innerHTML = `You lost this round... ${humanSelection} loses to ${computerSelection}`;
    computerScoreDisplay.innerHTML = ` ${computerScore }`
  } else if (roundWinner === 'tie') {
    roundResultMsg.innerHTML = `It's a tie this round! ${humanSelection} ties ${computerSelection}`;
  }

  if (roundNumber === 5){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetBtn.disabled = false;
    resetBtn.hidden = false;
    resetBtn.addEventListener('click', resetGame);
    if (humanScore > computerScore){
      matchResultMsg.innerHTML = `You won! You claimed victory over the computer with a score of ${humanScore} to ${computerScore}`;
    } else if (computerScore > humanScore) {
      matchResultMsg.innerHTML = `You were defeated... You fell to the computer with a score of ${humanScore} to ${computerScore}`;

    } else if (computerScore === humanScore) {
      matchResultMsg.innerHTML = `Wait, a tie?! It seems that you and the computer are evenly matched with both of you scoring ${humanScore}`;
    }
  }
  roundNumberDisplay.innerHTML = ` ${roundNumber}`;
}

updateDisplay(
	computerSelection,
	humanSelection,
	roundWinner,
	roundNumber,
	humanScore,
	computerScore
);
}






 



