const app = document.getElementById('app');
const second = document.querySelector('.second');


const rotateMe = (el) => {
  const d = new Date();
  let rdeg = 6 * (d.getSeconds() - 15);
  el.style.display = "block";
  el.style.transform = `rotate(${rdeg}deg) translateX(60px)`;
};

rotateMe(second);

setInterval(() => rotateMe(second), 1000);
