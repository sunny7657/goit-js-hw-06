const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
