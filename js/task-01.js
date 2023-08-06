const elements_1 = {
  list: document.querySelector('#categories'),
  items: document.querySelectorAll('.item'),
};

console.log(`Number of categories: ${elements_1.list.children.length}`);

elements_1.items.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
