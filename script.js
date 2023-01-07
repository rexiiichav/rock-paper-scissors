function getComputerChoice () {
    /* 
    Returns a random choice
    First chose a random number between 1 and 3
    Use that number to select Rock, Paper, or Scissors
    Return the Selection
    */
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0: 
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
