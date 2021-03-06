
document.getElementById("reset").onclick=resetGame;

const options = document.querySelectorAll(".user-option");

    options.forEach((option) => {
        option.onclick=runGame;
});

/**
 * Runs the principal game 
 */
function runGame() {

    const playerInput = this.textContent;
    const computerOptions = ["🪨", "📄", "✂️", "🦎", "🖖🏽"];
    const computerInput = computerOptions[Math.floor(Math.random() * 5)];
    document.getElementById("player-hand").textContent = playerInput;
    document.getElementById("computer-hand").textContent = computerInput;

    checkWinner(playerInput, computerInput);
}


/**
 * Determines whether Player or AI has won
 */
function checkWinner(computerInput, playerInput) {
    if (playerInput === computerInput) {

        document.getElementById("game-alert").innerText = "Tie of hands!";

    } else if (

        (computerInput == "🪨" && playerInput == "🦎") ||
        (computerInput == "🪨" && playerInput == "✂️") ||
        (computerInput == "📄" && playerInput == "🪨") ||
        (computerInput == "📄" && playerInput == "🖖🏽") ||
        (computerInput == "✂️" && playerInput == "🦎") ||
        (computerInput == "✂️" && playerInput == "📄") ||
        (computerInput == "🦎" && playerInput == "🖖🏽") ||
        (computerInput == "🦎" && playerInput == "📄") ||
        (computerInput == "🖖🏽" && playerInput == "🪨") ||
        (computerInput == "🖖🏽" && playerInput == "✂️") 

    ) {

        incrementComputerScore();

    } else {

        incrementPlayerScore();

    }
}


/**
 * Increases the player score
 */
function incrementPlayerScore() {
    let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldPlayerScore;
    document.getElementById("game-alert").innerText = "";

    if (oldPlayerScore === 10) {
        playerGameOver();
    }
}


/**
 * Increases the AI score
 */
function incrementComputerScore() {
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldComputerScore;
    document.getElementById("game-alert").innerText = "";

    if (oldComputerScore === 10) {
        computerGameOver();
    }
}


/**
 * Declares game over when player wins
 */
function playerGameOver() {
    document.getElementById("game-alert").innerText = "Game over. Player has won!";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
}


/**
 * Declares game over when computer wins
 */
 function computerGameOver() {
    document.getElementById("game-alert").innerText = "Game over. Computer has won!";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0; 
}


/**
 * Resets game to default settings
 */
function resetGame() {
    document.getElementById("game-alert").innerText = "";
    document.getElementById("player-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0; 
    document.getElementById("player-hand").innerText = "";
    document.getElementById("computer-hand").innerText = "";
}