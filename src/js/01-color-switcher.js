function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.stopBtn.disabled = true;
let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  changeBgColor();
  intervalId = setInterval(changeBgColor, 1000);
}

function onStopBtn() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function changeBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
