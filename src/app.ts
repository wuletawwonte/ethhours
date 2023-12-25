const app = document.getElementById('app');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

const rotateClock = (sec, min, hr) => {
  const d = new Date();
  let secDeg = 6 * d.getSeconds() - 90;
  let minDeg = 6 * d.getMinutes() - 90;
  let hourDeg = 30 * d.getHours() - 90 + (30 * (minDeg + 90)) / 360;
  sec.style.transform = `rotate(${secDeg}deg) translateX(45px)`;
  min.style.transform = `rotate(${minDeg}deg) translateX(40px)`;
  hr.style.transform = `rotate(${hourDeg}deg) translateX(30px)`;
};

rotateClock(second, minute, hour);
second.style.display = 'block';
minute.style.display = 'block';
hour.style.display = 'block';

setInterval(() => {
  rotateClock(second, minute, hour);
}, 1000);
