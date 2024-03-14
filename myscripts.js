function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK") {
        switch (computerSelection) {
            case "Rock":
                return ("You tied! Rock ties Rock");
                break;
            case "Paper":
                return ("You lost! Paper beats Rock");
                break;
            case "Scissors":
                return ("You won! Rock beats Scissors");
                break;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        switch (computerSelection) {
            case "Rock":
                return ("You won! Paper beats Rock");
                break;
            case "Paper":
                return ("You tied! Paper ties Paper");
                break;
            case "Scissors":
                return ("You lost! Scissors beats Paper");
                break;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        switch (computerSelection) {
            case "Rock":
                return ("You lost! Rock beats Scissors");
                break;
            case "Paper":
                return ("You won! Scissors beats Paper");
                break;
            case "Scissors":
                return ("You tied! Scissors ties Scissorsplay");
                break;
        }
    }       
}