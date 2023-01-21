const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById('question');
const form = document.getElementById('form');
const input = document.getElementById('input');
const scoreEl = document.getElementById('score');


question.textContent = `What is ${num1} x ${num2} = ?`;

let score = JSON.parse( localStorage.getItem('score')); // gets the value from the local storage as a number

// If there is no score in the local storage, then set the score to 0
if (!score) {
  score = 0;
}

// Updates the score in the DOM
scoreEl.textContent = `score: ${score}`;

const result = num1 * num2;

form.addEventListener('submit', () => {
  const userInput = +input.value; // + converts from string to number
  if (userInput === result) {
    score++;
    updateLocalStorage(); // updates the local storage with the new score
  } else {
    score--;
    updateLocalStorage(); // updates the local storage with the new score
  }
});

// Function to update the local storage with the score
function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
  // stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
}