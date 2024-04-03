const app = document.getElementById('app');

const render = (
  app: HTMLElement,
  timeDeg: { sec: number; min: number; hour: number }
) => {
  app.innerHTML = `<div class="app-content">
  <hr class="second" style="rotate(${timeDeg.sec}deg) translateX(45px)" />
  <hr class="minute" style="rotate(${timeDeg.min}deg) translateX(40px)" />
  <hr class="hour" style="rotate(${timeDeg.hour}deg) translateX(30px)" />
  <hr class="dot" />
  <div class="hour-characters">
    <h3>፲፪</h3>
    <div class="middle-hour-characters">
      <h3>፱</h3>
      <h3>፫</h3>
    </div>
    <h3>፮</h3>
  </div>
</div>
`;
};

const time = {
  second: null,
  minute: null,
  hour: null,
};

if (second === null || minute === null || hour === null) {
  throw new Error('Element not found');
}

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
