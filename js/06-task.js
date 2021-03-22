const navInputEl = document.querySelector('#validation-input');
const navInputElLength = navInputEl.dataset.length;

console.log(navInputElLength);

navInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (navInputElLength < event.currentTarget.value.length) {
        navInputEl.classList.remove('valid');
        navInputEl.classList.add('invalid');
    } else {
        navInputEl.classList.remove('invalid');
        navInputEl.classList.add('valid');
    }
};

