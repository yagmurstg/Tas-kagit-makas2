
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");
const computerChoiceDiv = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["Taş", "Kağıt", "Makas"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Berabere!";
    } else if (
        (playerChoice === "Taş" && computerChoice === "Makas") ||
        (playerChoice === "Kağıt" && computerChoice === "Taş") ||
        (playerChoice === "Makas" && computerChoice === "Kağıt")
    ) {
        playerScore++;
        return "Oyuncu Kazandı!";
    } else {
        computerScore++;
        return "Bilgisayar Kazandı!";
    }
}


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    computerChoiceDiv.textContent = computerChoice;
    resultDiv.textContent = result;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}


function resetScores() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = "Kazanan Oyuncu";
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    computerChoiceDiv.textContent = "?";
}


rockBtn.addEventListener("click", () => playGame("Taş"));
paperBtn.addEventListener("click", () => playGame("Kağıt"));
scissorsBtn.addEventListener("click", () => playGame("Makas"));


resetBtn.addEventListener("click", resetScores);
