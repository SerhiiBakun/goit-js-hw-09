import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const refs = {
  form: document.querySelector('.form'),
};

let formData = {};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = Number(e.target.value);
}

function onFormSubmit(e) {
  e.preventDefault();
  let { delay, step, amount } = formData;
  let position = 0;
  for (let i = 0; i < amount; i++) {
    position += 1;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {})
      .catch(({ position, delay }) => {});
  }
}
