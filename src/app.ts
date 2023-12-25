const app = document.getElementById('app');
const second = document.querySelector('.second') as HTMLElement;
const minute = document.querySelector('.minute') as HTMLElement;
const hour = document.querySelector('.hour') as HTMLElement;

const updateClock = () => {
  const d = new Date();
  const secDeg = 6 * d.getSeconds() - 90;
  const minDeg = 6 * d.getMinutes() - 90;
  const hourDeg = 30 * d.getHours() - 90 + (30 * (minDeg + 90)) / 360;
  return { secDeg, minDeg, hourDeg };
};

const rotateClock = (sec: HTMLElement, min: HTMLElement, hr: HTMLElement) => {
  const { secDeg, minDeg, hourDeg } = updateClock();
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
