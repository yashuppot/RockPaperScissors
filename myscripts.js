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
                console.log("You tied! Rock ties Rock");
                break;
            case "Paper":
                console.log("You lost! Paper beats Rock");
                break;
            case "Scissors":
                console.log("You won! Rock beats Scissors");
                break;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        switch (computerSelection) {
            case "Rock":
                console.log("You won! Paper beats Rock");
                break;
            case "Paper":
                console.log("You tied! Paper ties Paper");
                break;
            case "Scissors":
                console.log("You lost! Scissors beats Paper");
                break;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        switch (computerSelection) {
            case "Rock":
                console.log("You lost! Rock beats Scissors");
                break;
            case "Paper":
                console.log("You won! Scissors beats Paper");
                break;
            case "Scissors":
                console.log("You tied! Scissors ties Scissors");
                break;
        }
    }       
}