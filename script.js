const moves = document.querySelectorAll('.move');
const result = document.querySelector('#result')
let count = 0;
let wins = 0;
let loses = 0;
let ties = 0;

// Player selection
moves.forEach(move => move.addEventListener('click', function(e) {
    let playerMove = e.target.textContent;
    oneRound(playerMove = playerMove)
}));
//


//Computer selection
function computerSelection() {
    let computermove = Math.floor(Math.random()*3)+1
    switch (true) {
        case computermove === 1:
            computermove = 'Rock';
            break;
        case computermove === 2:
            computermove = 'Paper';
            break;
        case computermove === 3:
            computermove = 'Scissors';
            break;
        default:
            computerSelection();
    }
    return computermove
}

function scoreReturner() {
    return (wins, loses);
}

function winsOrLoses(playerMove, computermove) {
    switch (true) {
        case playerMove === 'Rock':
            (computermove === 'Rock') ? ties++ : (computermove === 'Paper') ? loses++ : wins++;
            break;
        case playerMove === 'Paper':
            (computermove === 'Paper') ? ties++ : (computermove === 'Scissors') ? loses++ : wins++;
            break;
        case playerMove === 'Scissors':
            (computermove === 'Scissors') ? ties++ : (computermove === 'Rock') ? loses++ : wins++;
            break;
    }
}

function message() {
    let message = '';
    switch (true) {
        case playerMove === 'Rock':
            (computermove === 'Rock') ? message = 'Tie' : (computermove === 'Paper') ? message = 'Loss' : message = 'Won';
            return message;
        case playerMove === 'Paper':
            (computermove === 'Paper') ? message = 'Tie' : (computermove === 'Scissors') ? message = 'Loss': message = 'Won';
            return message;
        case playerMove === 'Scissors':
            (computermove === 'Scissors') ? message = 'Tie' : (computermove === 'Rock') ? message = 'Loss' : message = 'Won';
            return message;
    }
}

function stopGame(wins, loses) {
    if (wins === 5 || loses === 5) {
        return true
    }
}

function oneRound(playerMove) {
    if (wins === 5 || loses === 5) {
        restartfunc()
    }
    let winLossDiv = document.createElement('div')
    let computermove = computerSelection();
    winsOrLoses(playerMove, computermove);
    if (count === 0) {
        newDiv = document.createElement('div');
        newDiv.textContent = ('Wins: ' + wins + ' Loses: ' + loses + ' Ties: ' + ties)
        result.appendChild(newDiv);
        newDiv2 = document.createElement('div');
        newDiv2.textContent = (playerMove + ' vs ' + computermove);
        result.appendChild(newDiv2);
    } else {
        newDiv.textContent = ('Wins: ' + wins + ' Loses: ' + loses + ' Ties: ' + ties);
        newDiv2.textContent = (playerMove + ' vs ' + computermove);
    }
    count++
    if (loses === 5) {
        winLossDiv.textContent = 'Youu loose!';
        winLossDiv.setAttribute('id', 'winLossDiv');
        result.appendChild(winLossDiv)
    } else if (wins === 5) {
        winLossDiv.textContent = 'Youu winn!';
        winLossDiv.setAttribute('id', 'winLossDiv');
        result.appendChild(winLossDiv);
    }
}

const restart = document.querySelector('#restart');
restart.addEventListener('click', function restartfunc(){
    ties = 0;
    loses = 0;
    wins = 0;
    count = 0;
    result.removeChild(newDiv);
    result.removeChild(newDiv2);
    result.removeChild(winLossDiv);
});

