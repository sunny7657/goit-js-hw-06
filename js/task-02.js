const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const components = ingredients.map(component => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = component;

  return li;
});

list.append(...components);
