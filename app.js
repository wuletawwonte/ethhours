const app = document.getElementById('app');
const second = document.querySelector('.second');

var sec = 0;

const rotateMe = (el, rdeg) => {
  el.style.transform = `rotate(${rdeg}deg)`;
};

setInterval(() => {
  sec++;
  rotateMe(second, sec);
}, 1000);
