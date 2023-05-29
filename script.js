let computerScore = 0;
let playerScore = 0;
let roundWinner = "";
let gameWinner = "";

// Function who return a random choice between "Rock, Paper & Scissors"
function computerPlay() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computer_random_Selection = computerChoice[randomNumber];
  return computer_random_Selection;
}

// Function you play one round of "Rock, Paper & Scissors"
function playRound(player_Selection, computer_Selection) {
  if (player_Selection == computer_Selection) {
    console.log("Tie game !");
    roundWinner = "Tie game !";
  }
  if (
    (player_Selection == "Rock" && computer_Selection == "Scissors") ||
    (player_Selection == "Paper" && computer_Selection == "Rock") ||
    (player_Selection == "Scissors" && computer_Selection == "Paper")
  ) {
    console.log("Player win this round !");
    roundWinner = "You win this round !";
    playerScore += 1;
  }
  if (
    (player_Selection == "Paper" && computer_Selection == "Scissors") ||
    (player_Selection == "Scissors" && computer_Selection == "Rock") ||
    (player_Selection == "Rock" && computer_Selection == "Paper")
  ) {
    console.log("Computer win this round !");
    roundWinner = "Computer win this round !";
    computerScore += 1;
  }
}

// Event listener function
const buttons = document.querySelectorAll("button");
let playerSelection = "";
let computerSelection = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.className;
    computerSelection = computerPlay();
    console.log(`The player has choose : ${playerSelection}`);
    console.log(`The computer has choose : ${computerSelection}`);
    playRound(
      (playerSelection = playerSelection),
      (computerSelection = computerSelection)
    );
    showComputerChoice();
    showWhoWinRound();
    showScore();
    whoWinTheGame();
  });
});

// Function who modify DOM to show the computer choice

function showComputerChoice() {
  const iaChoice = document.querySelector(".computerPlay");
  iaChoice.textContent = `The computer choice : ${computerSelection}`;
}

// Function who modify DOM to show who win the round

function showWhoWinRound() {
  const showWin = document.querySelector(".whoWin");
  showWin.textContent = roundWinner;
}

// Function who modify DOM to show player and computer score

function showScore() {
  const domComputerScore = document.querySelector(".computerScore");
  domComputerScore.textContent = `Computer score : ${computerScore}`;

  const domPlayerScore = document.querySelector(".playerScore");
  domPlayerScore.textContent = `Player score : ${playerScore}`;
}

// Function who display in DOM who has win the game

function whoWinTheGame() {
  if (playerScore + computerScore == 5) {
    if (playerScore > computerScore) {
      gameWinner = "Player win the game !!";
    } else {
      gameWinner = "Computer win the game !! Try again";
    }
  }
  const domGameWinner = document.querySelector(".finalResult");
  domGameWinner.textContent = gameWinner;
}
