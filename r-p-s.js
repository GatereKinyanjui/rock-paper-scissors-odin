// i. select a random choice from pc
let arr = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ii. pc & player play a single round
const playerSelection = prompt("pick your weapon");
const computerSelection = getComputerChoice(arr);

function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        console.log("it's a tie! try again");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        console.log("it's a tie! try again");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        console.log("it's a tie! try again.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection !== "paper") {
        console.log("you lose! paper beats rock.")
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("you win! rock crushes scissors");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("you win! paper beats rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("you lose! scissors butcher paper");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("you lose! rock crushes scissors");
    } else (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper");
    console.log("you win! scissors butcher paper");
    return singleRound(playerSelection, computerSelection);
}

// 3. play multiple rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(singleRound(playerSelection, computerSelection))
    }
}

return game();