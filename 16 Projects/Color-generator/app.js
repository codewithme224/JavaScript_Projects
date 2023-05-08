const container = document.querySelector('.container');
const colors = document.querySelector('.colors');

for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-container'); // add class to container
  container.appendChild(colorContainer); // add color to container
  
}

const color = document.querySelectorAll('.color-container');

generateColor();

function generateColor() {
  color.forEach((color) => {
    const newColorCode = randomColor();
    color.style.backgroundColor = `#${newColorCode}`;
    color.innerHTML = `#${newColorCode}`;
    
  });
}

// function that copy's the newColorCode to the clipboard on click

color.forEach((color) => {
  color.addEventListener('click', () => {
    const colorCode = color.innerHTML;
    navigator.clipboard.writeText(colorCode);
    color.innerHTML = 'Copied';
    setTimeout(() => {
      color.innerHTML = colorCode;
    }, 1000);
  });
});


function randomColor() {
  const chars = '0123456789ABCDEF';
  const colorCodeLength = 6;
  let colorCode = '';
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}