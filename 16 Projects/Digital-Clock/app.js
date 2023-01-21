const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

// function updateClock() {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
//   const ampmText = h >= 12 ? 'PM' : 'AM';

//   hour.textContent = h % 12 || 12;
//   minute.textContent = m < 10 ? '0' + m : m;
//   second.textContent = s < 10 ? '0' + s : s;
//   ampm.textContent = ampmText;
// }

// setInterval(updateClock, 1000);

// Another way to do it
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    h -= 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);

}

updateClock();