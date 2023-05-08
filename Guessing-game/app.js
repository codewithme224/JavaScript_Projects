const randomNumber = Math.floor(Math.random() * 100) + 1;
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const feedback = document.querySelector(".feedback");
const resetBtn = document.querySelector(".reset-btn");



// Number of allowed guesses
const maxGuesses = 5;

// Number of guesses made
let numGuesses = 0;


btn.addEventListener("click", () =>{

    numGuesses++;
    if(numGuesses > maxGuesses){
        numGuesses = maxGuesses;
        feedback.textContent = "You have exceeded the number of guesses";
        input.value = "";
        input.disabled = true;
        return;
    }

  const guess = parseInt(input.value);

  if (guess === randomNumber) {
    feedback.textContent = "You got it right. Congratulations!";
  } else if (guess > randomNumber) {
    feedback.textContent =
      "Your guess was " + guess + " . That's too high. Try again!";
  } else if (guess < randomNumber) {
    feedback.textContent =
      "Your guess was " + guess + " . That's too low. Try again!";
  }

  // Reset the input field
  input.value = "";
  input.disabled = false;
  
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  numGuesses = 0;
  input.disabled = false;
  input.value = "";
  feedback.textContent = "Game reset. Start guessing...";
}


  