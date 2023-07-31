import Notiflix from "notiflix";

const form = document.querySelector('.form');
const delay = document.getElementsByName("delay")
const step = document.getElementsByName("step");
const amount = document.getElementsByName("amount");
const button = document.querySelector("button")

form.addEventListener("click", onCreatePromise)
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onCreatePromise(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {

    createPromise(i, inputDelay)

      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`
        ❌Rejected promise ${position} in ${delay}ms`);
      });
    e.currentTarget.reset();
    inputDelay = inputDelay + inputStep;
  }

}