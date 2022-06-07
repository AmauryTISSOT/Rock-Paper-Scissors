

// Function who return a random choice between "Rock, Paper & Scissors"
function computerPlay() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3)
    let computer_random_Selection = computerChoice[randomNumber]
    //console.log('Dans la fonction computer play : ' + computer_random_Selection)
    return (computer_random_Selection)
}

// Function who allows the player to choose between "Rock, Paper & Scissors"
function playerPlay() {
    let playerSelectionInput = prompt('For Rock press 0 \nFor Paper press 1\nFor Scissors press 2');
    const playerChoice = ['Rock', 'Paper', 'Scissors'];
    let player_input_Selection = playerChoice[playerSelectionInput]
    //console.log('Dans la fonction player play : ' + player_input_Selection)
    return (player_input_Selection)
}

let computerScore = 0;
let playerScore = 0;

// Function you play one round of "Rock, Paper & Scissors"
function playRound(player_Selection, computer_Selection) {
    //console.log('Dans la fonction player selection ' + player_Selection)
    //console.log('Dans la fonction ordi selection ' + computer_Selection)

  if (player_Selection == computer_Selection) {
      console.log('Tie game !')
  }
  if ((player_Selection == 'Rock' && computer_Selection == 'Scissors') || 
     (player_Selection == 'Paper' && computer_Selection == 'Rock') ||
     (player_Selection == 'Scissors' && computer_Selection == 'Paper')) {
         console.log('Player win this round !')
         playerScore += 1;
     }
  if ((player_Selection == 'Paper' && computer_Selection == 'Scissors') || 
     (player_Selection == 'Scissors' && computer_Selection == 'Rock') ||
     (player_Selection == 'Rock' && computer_Selection == 'Paper')) {
         console.log('Computer win this round !')
         computerScore += 1;
     }
}

// Function who play 5 round of "Rock, Paper & Scissors"
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        console.log(`The computer has choose : ${computerSelection}`)
        let playerSelection = playerPlay();
        console.log(`The player has choose : ${playerSelection}`)

        playRound(player_Selection=playerSelection, computer_Selection=computerSelection)
    }
    console.log(`Computer score : ${computerScore}`);
    console.log(`Player score : ${playerScore}`);
    if (computerScore > playerScore) {
        console.log('Computer win the game !')
    }
    else if (computerScore < playerScore) {
        console.log('Player win the game !')
    }
    else {
        console.log('DRAW !')
    }
}

game();


