let computerChoice;
let humanChoice;
const getChoiceButton = document.querySelector("#get-choice-btn");

const getComputerChoice = () => {
  let randomNumber = Math.random();
  
  if (randomNumber >= 0 && randomNumber <= .33){
    return computerChoice = "rock";
  } else if (randomNumber > .33 && randomNumber <= .66) {
    return computerChoice = "paper";
  } else if (randomNumber > .66 && randomNumber <= 1){
    return computerChoice = "scissors";
  }
};

const getHumanChoice = (choice) => {
  
  

  if (choice === '1'){
     humanChoice = 'rock';
     return humanChoice;
  } else if (choice === '2') {
    humanChoice = 'paper';
    return humanChoice;
  } else if (choice === '3') {
    humanChoice = 'scissors';
    return humanChoice;
  } else {
     return alert("please type  the number 1 for rock, 2 for paper, or 3 for scissors")
  }

}


getChoiceButton.addEventListener('click', () => {
let getChoice = prompt('For rock type in the number 1, for paper type in 2, and for scissors type 3');
getHumanChoice(getChoice)});



getComputerChoice();

console.log(humanChoice);
console.log(computerChoice)