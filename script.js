const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreHeading = document.querySelector("#score-heading");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
const containerDiv = document.querySelector("#container");
const choicesDiv = document.createElement("div");
const playerChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");

containerDiv.appendChild(choicesDiv);
choicesDiv.appendChild(playerChoicePara);
choicesDiv.appendChild(computerChoicePara);

choicesDiv.style.display = "flex";
choicesDiv.style.justifyContent = "space-between";
choicesDiv.style.width = "360px";
choicesDiv.style.padding = "2rem";
choicesDiv.style.margin = "0 auto";
playerChoicePara.style.width = "45%";
computerChoicePara.style.width = "45%";

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    return (options[Math.floor(Math.random() *options.length)]);
}

function playRound(e) {
    
    const playerSelection = e.target.id.toUpperCase();
    const computerSelection = computerPlay().toUpperCase();
    while ((playerScore < 5) && (computerScore < 5)){
    function win(){
        playerScore ++;
        scoreHeading.textContent = 'You won!';
        playerScorePara.textContent = `Player = ${playerScore}`;
        computerScorePara.textContent = `Computer = ${computerScore}`;
        playerChoicePara.textContent = `Player's choice: ${playerSelection.toLowerCase()}`;
        computerChoicePara.textContent = `Computer's choice: ${computerSelection.toLowerCase()}`;
    }
    
    function lose(){
    computerScore ++;
    scoreHeading.textContent = 'You lose!';
    playerScorePara.textContent = `Player = ${playerScore}`;
    computerScorePara.textContent = `Computer = ${computerScore}`;
    playerChoicePara.textContent = `Player's choice: ${playerSelection.toLowerCase()}`;
    computerChoicePara.textContent = `Computer's choice: ${computerSelection.toLowerCase()}`;
    }
    
    function tie(){
        scoreHeading.textContent = 'It\'s a tie!';
        playerChoicePara.textContent = `Player's choice: ${playerSelection.toLowerCase()}`;
        computerChoicePara.textContent = `Computer's choice: ${computerSelection.toLowerCase()}`;
    }
    
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')){
            return win();
        }
    else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')){
        return lose();
    } else {
        return tie();
    }   
}
    if (playerScore > computerScore){
        scoreHeading.textContent = 'You win the game!'
    }
    else if (playerScore < computerScore){
        scoreHeading.textContent = 'You lose the game!'
    }
}


//    if (playerScore > computerScore) {
//        scoreHeading.textContent = 'You win the game!';
//    } if (computerScore > playerScore) {
//        scoreHeading.textContent = 'You lost the game!';}



//function updateChoices(playerSelection, computerSelection) {
//  playerChoicePara.textContent = `Player's choice: ${playerSelection.toLowerCase()}`;
//  computerChoicePara.textContent = `Computer's choice: ${computerSelection.toLowerCase()}`;
//}

