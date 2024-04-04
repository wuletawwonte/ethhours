const render = (timeDeg: TimeType) => {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `<div class="app-content">
  <hr class="second" style="transform: rotate(${timeDeg.second}deg) translateX(45px)" />
  <hr class="minute" style="transform: rotate(${timeDeg.minute}deg) translateX(40px)" />
  <hr class="hour" style="transform: rotate(${timeDeg.hour}deg) translateX(30px)" />
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

interface TimeType {
  second: number;
  minute: number;
  hour: number;
}

const timeObj: TimeType = {
  second: 0,
  minute: 0,
  hour: 0,
};

const myTime = new Proxy(timeObj, {
  get(target: TimeType, key: 'second' | 'minute' | 'hour') {
    return target[key];
  },
  set(target: TimeType, key: 'second' | 'minute' | 'hour', value) {
    target[key] = value;
    render(target);
    return true;
  },
});

setInterval(() => {
  myTime.second = (new Date().getSeconds() / 60) * 360 - 90;
  myTime.minute = (new Date().getMinutes() / 60) * 360 - 90;
  myTime.hour =
    (new Date().getHours() / 12) * 360 -
    90 +
    (new Date().getMinutes() / 60) * 30;
}, 1000);
