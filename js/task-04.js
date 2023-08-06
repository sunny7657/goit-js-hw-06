const elements_4 = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};

elements_4.btnDecrement.addEventListener('click', handlerChangeValue);
elements_4.btnIncrement.addEventListener('click', handlerChangeValue);

const counter = document.querySelector('#value');

function handlerChangeValue(evt) {
  const dataValue = evt.currentTarget.dataset.action;
  let counterValue = Number(counter.textContent);
  switch (dataValue) {
    case 'decrement':
      counterValue += -1;
      break;
    case 'increment':
      counterValue += +1;
      break;
  }
  counter.textContent = counterValue;
}
