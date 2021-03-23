const navInputRangeEl = document.querySelector('#font-size-control');
const navTextEl = document.querySelector('#text');
const navInputRangeElValue = navInputRangeEl.value;

navTextEl.setAttribute("style", `font-size: ${navInputRangeElValue}px;`);

navInputRangeEl.addEventListener('input', onInput);

function onInput(event) {
    let currentValue = event.currentTarget.value;
    navTextEl.setAttribute("style", `font-size: ${currentValue}px;`);
};

