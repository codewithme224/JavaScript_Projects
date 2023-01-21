const btn = document.querySelector('.btn');
const trailer = document.querySelector('.trailer-container');
const close = document.querySelector('.close-icon');
const video = document.querySelector('video');


btn.addEventListener('click', () => {
  trailer.classList.remove('active');
});

close.addEventListener('click', () => {
  trailer.classList.add('active');
  video.pause();
  video.currentTime = 0;
});