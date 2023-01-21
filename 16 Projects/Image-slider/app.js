const next = document.querySelector('.next');
const imageContainer = document.querySelector('.image-container');
const prev = document.querySelector('.prev');

let currentImg = 1;
let timeout;
const imgs = document.querySelectorAll('img'); // count all images

next.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout); // clear the timeout
  updateImg();
});

prev.addEventListener('click', () => {
  currentImg--; // currentImg = currentImg - 1; 
  clearTimeout(timeout); // clear the timeout
  updateImg(); 
});

updateImg();

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
  
