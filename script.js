"use strict";
const body = document.querySelector("body");
const number = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const again = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

// random number
let secretNumber = Math.floor(Math.random() * 20) + 1;

//helper func for high and low cases
const highOrLowCase = (text) => {
  message.textContent = text;
  score.textContent--;
};

check.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  // no guess
  if (!guess) {
    message.textContent = "No Number!";

    // guess bigger than 20 or lower than 1
  } else if (guess > 20 || guess < 1) {
    message.textContent = "please choose between 1 and 20!";

    // lose case
  } else if (score.textContent === "1") {
    score.textContent = 0;
    message.textContent = "You Lose!";
    body.style.backgroundColor = "red";
    check.setAttribute("disabled", "true");
    check.style.cursor = "not-allowed";

    // high case
  } else if (guess > secretNumber) {
    highOrLowCase("Too High!");

    // low case
  } else if (guess < secretNumber) {
    highOrLowCase("Too Low!");

    // win case
  } else if (guess === secretNumber) {
    if (Number(score.textContent) > Number(highScore.textContent)) {
      highScore.textContent = score.textContent;
    }
    message.textContent = "You Win!";
    body.style.backgroundColor = "#60B347";
    check.setAttribute("disabled", "true");
    number.style.width = "30rem";
    number.textContent = secretNumber;
  }
});

// reset the game when click on again
again.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  number.textContent = "?";
  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
  guessInput.value = "";
  score.textContent = 20;
  message.textContent = "Start guessing...";
  check.removeAttribute("disabled");
  check.style.cursor = "pointer";
});
