import Notiflix from 'notiflix';

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const firstDelay = Number(form.elements.delay.value);
  const delayStep = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  if (firstDelay < 0 || delayStep < 0 || amount <= 0) {
    Notiflix.Notify.failure('❌ Please enter positive value')
    return;
  }

  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
         createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    delay += delayStep;
    };
}; 

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
         // Fulfill
        resolve({ position, delay });
       
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
          });
          
};
