const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
  ingredients: document.querySelector('#ingredients'),
  ulEl: document.createElement('ul'),
}

refs.ulEl.classList.add('ingredients');

const element = ingredients.map(item => {
    const navEl = document.createElement('li');
    navEl.innerText = item;

    return navEl;
});

refs.ulEl.append(...element);
refs.ingredients.appendChild(refs.ulEl);

console.log(refs.ingredients);



