function getComputerChoice () {
    /* 
    Returns a random choice
    First chose a random number between 0 and 2
    Use that number to select Rock, Paper, or Scissors
    Return the Selection
    */
    return Math.floor(Math.random() * 3);
    
}

function playGame (playerSelection, computerSelection) {
    pS = parseInt(playerSelection);
    cS = parseInt(computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if (pS === 0 && cS === 1) {
        return "You Lose. Paper Beats Rock."
    }
    else if (pS === 0 && cS === 2) {
        return "You Win. Rock Beats Scissors."
    }
    else if (pS === 1 && cS === 0) {
        return "You Win. Paper Beats Rock."
    }
    else if (pS === 1 && cS === 2) {
        return "You Lose. Scissors Beats Paper."
    }
    else if (pS === 2 && cS === 0) {
        return "You Lose. Rock Beats Scissors."
    }
    else if (pS === 2 && cS === 1) {
        return "You Win. Scissors Beats Paper."
    }
};

function adjustScore (resultOfGame) {
    if (resultOfGame.includes('Win')) {
        pScore.textContent = `Player Score: ${++playerScore}`}
    else if (resultOfGame.includes('Lose')) {
        cScore.textContent = `Computer Score: ${++computerScore}`}
    else if (resultOfGame === 'reset') {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Player Score: ${playerScore}`
        cScore.textContent = `Computer Score: ${computerScore}`}
    
};


//Start Code

let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');
let result = document.querySelector('#result')
let buttons = document.querySelectorAll('button');

playerScore = 0;
computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'rock') {
            let readOut = playGame(0, getComputerChoice());
            result.textContent = readOut;
            adjustScore(readOut);
        } else if (e.target.id === 'paper') {
            let readOut = playGame(1, getComputerChoice());
            result.textContent = readOut;
            adjustScore(readOut);
        } else {
            let readOut = playGame(2, getComputerChoice());
            result.textContent = readOut;
            adjustScore(readOut);
        }
        if (playerScore === 5) {
            result.textContent = "YOU WIN! CONGRATULATIONS!"
            adjustScore('reset');
        } else if (computerScore === 5) {
            result.textContent = "You Lose!";
            adjustScore('reset');
        }
    })
});



