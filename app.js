const app = document.getElementById('app');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');

const rotateClock = (sec, min) => {
  const d = new Date();
  let secDeg = (6 * d.getSeconds()) - 90;
  let minDeg = (6 * d.getMinutes()) - 90;
  sec.style.transform = `rotate(${secDeg}deg) translateX(60px)`;
  min.style.transform = `rotate(${minDeg}deg) translateX(60px)`;
};

rotateClock(second, minute);
second.style.display = "block";
minute.style.display = "block";

setInterval(() => {
  rotateClock(second, minute);
}, 1000);
