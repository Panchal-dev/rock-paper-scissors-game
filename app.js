//! 🎮 Rock-Paper-Scissors Game Logic (Method 1 - Basic Functional Approach)

//@ 🔢 Initialize Player Scores
let userScore = 0;
let compScore = 0;

//# 🎯 Select UI Display Elements
let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");
let message = document.querySelector("#msg");
let allChoices = document.querySelectorAll(".choice");

//% 🔁 Function to Play One Round
function playGame(userChoice) {
  //^ 🎲 Generate Computer's Random Choice
  let options = ["rock", "paper", "scissors"];
  let compChoice = options[Math.floor(Math.random() * 3)];

  //+ ⚖️ Check for a Draw
  if (userChoice === compChoice) {
    message.innerText = "😐 It's a Draw!";
    message.style.backgroundColor = "#081b31";
    return;
  }

  //& ✅ Determine if User Wins
  let userWins =
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper");

  //* 🧠 Update Scores and Display Result
  if (userWins) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    message.innerText = `🎉 You win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    message.innerText = `💥 You lost! ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
}

//~ 🖱️ Add Event Listener to Each Choice Box
allChoices.forEach((choiceBox) => {
  choiceBox.addEventListener("click", () => {
    const userChoice = choiceBox.getAttribute("id"); //! 🆔 "rock", "paper", or "scissors"
    playGame(userChoice);
  });
});

//+=======================================================

/*
//! 📦 Modular version of Rock Paper Scissors

let userScore = 0;
let compScore = 0;

//@ 📊 Score & DOM Elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

//% 🎲 Generate a Random Computer Choice
const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

//? ⚖️ Handle a Draw Result
const drawGame = () => {
  msg.innerText = "😐 It's a Draw!";
  msg.style.backgroundColor = "#081b31";
};

//& 🏆 Display Winner or Loser Status
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `🎉 You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `💥 You lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//* 🧠 Core Game Logic
const playGame = (userChoice) => {
  const compChoice = generateComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWins = true;

    if (userChoice === "rock") {
      userWins = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWins = compChoice === "rock";
    } else {
      userWins = compChoice === "paper";
    }

    showWinner(userWins, userChoice, compChoice);
  }
};

//~ 🖱️ Attach Event Listeners to All Choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); //!🔍 "rock", "paper", or "scissors"
    playGame(userChoice);
  });
});
*/
