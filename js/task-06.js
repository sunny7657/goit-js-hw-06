const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerCheckInput);

function handlerCheckInput(evt) {
  if (evt.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
