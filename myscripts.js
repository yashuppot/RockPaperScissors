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
                return ("You tied! Scissors ties Scissors");
                break;
        }
    }       
}

let computerWins = 0;
let playerWins = 0;
let draws = 0;
const info = document.querySelector("#info");
info.textContent = '';

const computerInfo = document.createElement("p");

const playerInfo = document.createElement("p");


const roundResult = document.createElement("p");
const gameResult = document.createElement("p");

const panel = document.querySelector(".header");

info.append(playerInfo);
info.append(computerInfo);
info.append(roundResult);
info.append(gameResult);

panel.addEventListener('click', (e) => {
    target = e.target;
    switch(target.id) {
        case "rock":
            console.log(target.id);
            result = playRound("ROCK", getComputerChoice());
            break;
        case "paper":
            result = playRound("PAPER", getComputerChoice());
            break;
        case "scissors":
            result = playRound("SCISSORS", getComputerChoice());
            break;
    }
    console.log(result);
    updateState(result);
})

function updateState(result) {
    roundResult.textContent = result;
    switch (result.charAt(4)) {
        case "t":
            draws += 1;
            break;
        case "w":
            playerWins += 1;
            break;
        case "l":
            computerWins += 1;
            break;
    }
    computerInfo.textContent = `Computer Score: ${computerWins}$`
    playerInfo.textContent = `Player Score: ${playerWins}`;
    if (playerWins == 5) {
        gameResult.textContent = "You Won the Game!"
        playerInfo.textContent = '';
        computerInfo.textContent = '';
        createPlayButton();
    }
    else if (computerWins == 5) {
        gameResult.textContent = "You Lost the Game!"
        playerInfo.textContent = '';
        computerInfo.textContent = '';
        createPlayButton();
    }
}


function createPlayButton () {
    const playButton = document.createElement("button");
    playButton.classList.add("option");
    playButton.textContent = "Play Game";
    playButton.addEventListener('click', () => {
        playerWins = 0;
        computerWins = 0;
        playerInfo.textContent = `Player Score: ${playerWins}`;
        computerInfo.textContent = `Computer Score: ${computerWins}`
        roundResult.textContent = '';
        gameResult.textContent = '';
        playButton.remove();
    })
    info.appendChild(playButton);
}

createPlayButton();
