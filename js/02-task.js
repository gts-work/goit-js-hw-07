const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navIngradientsEl = document.querySelector('#ingredients');
const listIngradientEl = document.createElement('ul');
listIngradientEl.classList.add('ingredients');

const element = ingredients.map(item => {
    const navEl = document.createElement('li');
    navEl.innerText = item;

    return navEl;
});

listIngradientEl.append(...element);
navIngradientsEl.appendChild(listIngradientEl);

console.log(listIngradientEl);



