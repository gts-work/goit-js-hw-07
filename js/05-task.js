const navCounterValueEl = document.querySelector('#value');
const navActionEl = document.querySelectorAll('#counter button');
let counterValue = parseInt(navCounterValueEl.textContent)

console.log(navActionEl);

const navDecrementEl = navActionEl[0];
const navIncrementEl = navActionEl[1];

navIncrementEl.addEventListener('click', onIncrement);
navDecrementEl.addEventListener('click', onDecrement);

function onIncrement(event) {
    counterValue += 1;
    navCounterValueEl.textContent = counterValue;
};

function onDecrement(event) {
    counterValue -= 1;
    navCounterValueEl.textContent = counterValue;
};
