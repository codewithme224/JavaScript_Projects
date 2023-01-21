const container = document.querySelector('.container');

const btn = document.querySelector('.btn');

const popupContainer = document.querySelector('.popup-container');

const close = document.querySelector('.close-icon');

btn.addEventListener('click', () => {
  popupContainer.classList.remove('active');
  container.classList.add('active');
});

close.addEventListener('click', () => {
  popupContainer.classList.add('active');
  container.classList.remove('active');
});

