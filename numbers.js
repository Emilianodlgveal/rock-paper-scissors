const moves = document.querySelectorAll('button');
const txt = document.querySelector('p');


const choicesForGame = ["Rock", "Paper", "Scissors"];
let wins = 0;
let loses = 0;


function computerPlay() {
    let computerItem = choicesForGame[Math.floor(Math.random()*choicesForGame.length)];
    return computerItem;
}
function pressingButton() {
    return moves.forEach(button => button.addEventListener('click', e => e.target.id));
}

function playerSelection() {
    let playerItem = pressingButton();
    return playerItem;
}

function winAndLoses(playerItem, computerItem) {
    switch (true) {
        case playerItem === "Rock" || playerItem === "r":
            (computerItem === "Rock") ? null : (computerItem === "Paper") ? loses++ : wins++;
            break;
        case playerItem === "Paper" || playerItem === "p":
            (computerItem === "Rock") ? wins++ : (computerItem === "Paper") ? null : loses++;
            break;
        case playerItem === "Scissors" || playerItem === "s":
            (computerItem === "Rock") ? loses++ : (computerItem === "Paper") ? wins++ : null;
            break;
    }
}

function oneRound(playerItem, computerItem) {
    let message = "";
    switch (true) {
        case playerItem === "Rock" || playerItem === "r":
            (computerItem === "Rock") ? message = "It's a Tie!!" : (computerItem === "Paper") ? message = "You lose. Paper beats Rock!!" : message = "You won!! Rock beats Scissors";
            break;
        case playerItem === "Paper" || playerItem === "p":
            (computerItem === "Rock") ? message = "You won!! Paper beats Rock" : (computerItem === "Paper") ? message = "It's a Tie!!" : message = "You lose. Scissors beats Paper!!";
            break;
        case playerItem === "Scissors" || playerItem === "s":
            (computerItem === "Rock") ? message = "You lose. Rock beats Scissors!!" : (computerItem === "Paper") ? message = "You won!! Scissors beats Paper" : message = "It's a Tie!!";
            break;
        default:
            message = "Please enter a move"
    }       
    return message
}

function game() {
    console.log("Welcome to the game, you decide your move by typing 'r'ock,'p'aper or 's'cissors.")
    while (wins !== 5 && loses !== 5) {
        let computerMove = computerPlay();
        let playerMove = playerSelection();
        winAndLoses(playerMove, computerMove);
        console.log("Wins: " + wins + " Loses: " + loses);
        console.log(oneRound(playerMove, computerMove));
    }
    wins = 0;
    loses = 0;
}

moves.forEach(button => button.addEventListener('click', game)); 









// function updateBtn() {
//     if (btn.textContent === 'Start machine') {
//         btn.textContent = 'Stop machine';
//         txt.textContent = 'The machine has started!';
//     } else {
//         btn.textContent = 'Start machine';
//         txt.textContent = 'The machine is stopped.';
//     }
// }
