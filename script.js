

// Function who return a random choice between "Rock, Paper & Scissors"
function computerPlay() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3)
    let computer_random_Selection = computerChoice[randomNumber]
    return (computer_random_Selection)
}

// Function who allows the player to choose between "Rock, Paper & Scissors"
function playerPlay() {
    let playerSelection = prompt('For Rock press 0 \nFor Paper press 1\nFor Scissors press 2');
    const playerChoice = ['Rock', 'Paper', 'Scissors'];
    let player_input_Selection = playerChoice[playerSelection]
    return (player_input_Selection)
}

let computerScore = 0;
let playerScore = 0;

// Function you play one round of "Rock, Paper & Scissors"
function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock' && playerSelection == 'Rock') {
        console.log('Draw')
    }
    if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        console.log('Player win !')
        playerScore += 1;
    }
    if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        console.log('Computer win !')
        computerScore += 1;
    }
    if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        console.log('Computer win !')
        computerScore += 1;
    }
    if (computerSelection == 'Paper' && playerSelection == 'Paper') {
        console.log('Draw')
    }
    if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        console.log('Player win !')
        playerScore += 1;
    }
    if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        console.log('Player win !')
        playerScore += 1;
    }
    if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        console.log('Computer win !')
        computerScore += 1;
    }
    if (computerSelection == 'Scissors' && playerSelection == 'Scissors') {
        console.log('Draw')
    }

}

// Function who play 5 round of "Rock, Paper & Scissors"
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        console.log(`The computer has choose : ${computerSelection}`)
        const playerSelection = playerPlay();
        console.log(`The player has choose : ${playerSelection}`)
        playRound(computerSelection, playerSelection)
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


