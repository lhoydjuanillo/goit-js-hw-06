const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.getElementById('ingredients');

for(let i=0; i < ingredients.length; i++){
  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.innerHTML = ingredients[i];
  ingredientEl.append(li);
};

// ingredients.map(items => {
//   const li = document.createElement('li');
//   li.setAttribute('class', 'item');
//   li.innerHTML = items;
//   ingredientEl.append(li);
// });