function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', handlerChangeColor);

function handlerChangeColor(event) {
  const random = getRandomHexColor();
  body.style.backgroundColor = random;
  spanColor.textContent = random;
}
