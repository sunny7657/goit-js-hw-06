const elements_5 = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
elements_5.input.addEventListener('input', handlerPrint);

function handlerPrint(evt) {
  elements_5.span.textContent = evt.currentTarget.value.trim();

  if (evt.currentTarget.value.trim() === '') {
    elements_5.span.textContent = 'Anonymous';
  }
}
