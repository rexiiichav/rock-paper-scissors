function getComputerChoice () {
    /* 
    Returns a random choice
    First chose a random number between 0 and 2
    Use that number to select Rock, Paper, or Scissors
    Return the Selection
    */
    return Math.floor(Math.random() * 3);
    
}

function getPlayerChoice () {
    while (true) {
        let choice = (prompt("Please select number for Rock, Paper, or Scissors")).toLowerCase();
        switch (choice) {
        case "rock": 
            return 0;
            break;
        case "paper": 
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default:
            alert("Invalid entry - try again - check your spelling");
            break;
    }
    }
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

function game () {
    let pScore = 0;
    let cScore = 0;
    console.log("Best 3 Out of 5 Game - Go!");
    while (true) {
        let result = playGame(getPlayerChoice(),getComputerChoice());
        if (result.includes("Win")) {
            pScore ++;
            console.log(`${result}`);
            console.log(`Player: ${pScore}. Computer ${cScore}`);
        } else if (result.includes("Lose")) {
            cScore ++;
            console.log(`${result}`);
            console.log(`Player: ${pScore}. Computer ${cScore}`);
        } else {
            console.log("Tie - Next Round.")
        }
        if (pScore === 3) {
            console.log("You Win!")
            break;
        } else if (cScore === 3) {
            console.log("You Lose...")
            break;
        }
        }
}


