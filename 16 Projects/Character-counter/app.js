const textarea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

textarea.addEventListener('keyup', () => {
  updateCounter()
});

updateCounter();

function updateCounter() {
 totalCounter.textContent  = textarea.value.length
 remainingCounter.textContent = 100 - textarea.value.length
}