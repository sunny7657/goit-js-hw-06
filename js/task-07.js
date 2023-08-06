const inputSizeControl = document.querySelector('#font-size-control');
const spanChangeText = document.querySelector('#text');

inputSizeControl.addEventListener('input', handlerSizeChange);

function handlerSizeChange(event) {
  spanChangeText.style.fontSize = `${event.currentTarget.value}px`;
}
