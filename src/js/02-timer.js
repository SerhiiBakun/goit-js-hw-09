import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

// refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
  console.log(Í`m Alive!!!`);
});

console.log('hello!');
console.log(refs.dateInput);
console.log(refs.days.textContent);
console.log(refs.hours);
console.log(refs.minutes);
console.log(refs.seconds);

// let selectedTime = 0;
// let interval = 0;
// let timerId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     selectedTime = selectedDates[0].getTime();
//     console.log(selectedTime);
//   },
// };

// flatpickr(refs.dateInput, options);

// function onStart() {
//   timerId = setInterval(
//     selected => {
//       const currentTime = new Date().getTime();
//       interval = selected - currentTime;
//       console.log(def);
//     },
//     1000,
//     selectedTime
//   );
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
