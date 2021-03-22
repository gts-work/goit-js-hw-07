const navInputEl = document.querySelector('#name-input');
const navSpanEl = document.querySelector('#name-output')

navInputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (!event.currentTarget.value) {
        navSpanEl.textContent = 'незнакомец';
    } else {
        navSpanEl.textContent = event.currentTarget.value;
    }
};

