import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkTime(selectedDates[0].getTime());
  },
};

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let timerId = null;
let selectedTime = 0;

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtn);

const newDate = new flatpickr(refs.dateInput, options);

function checkTime(time) {
  const currentTime = Date.now();
  if (currentTime > time) {
    Notify.failure('Please choose a date in the future');
    refs.startBtn.disabled = true;
    return;
  }
  refs.startBtn.disabled = false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartBtn() {
  refs.startBtn.disabled = true;
  refs.dateInput.disabled = true;
  selectedTime = newDate.selectedDates[0].getTime();
  timerId = setInterval(countDownTimer, 1000);
}

function countDownTimer() {
  const cdTime = selectedTime - Date.now();
  if (cdTime <= 0) {
    clearInterval(timerId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(cdTime);
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
