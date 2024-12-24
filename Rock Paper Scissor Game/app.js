let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const restartBtn = document.querySelector("#restart");

// Generate a random computer choice
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Update the message for a draw
const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.color = "#87A2FF";
};

// Display the winner and update the score
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.color = "#86D293";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.color = "#D91656";
    }
};

// Game logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "Rock") userWin = compChoice === "Paper" ? false : true;
        if (userChoice === "Paper") userWin = compChoice === "Scissor" ? false : true;
        if (userChoice === "Scissor") userWin = compChoice === "Rock" ? false : true;

        showWinner(userWin, userChoice, compChoice);
    }
};

// Restart the game
const restartGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Make Your Move!";
    msg.style.color = "#555";
};

// Event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Restart button listener
restartBtn.addEventListener("click", restartGame);
