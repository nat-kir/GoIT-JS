const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsElem = document.querySelector('#ingredients');
ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  ingredientsElem.appendChild(elem);
});
