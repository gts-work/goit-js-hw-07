const navInputNumberEl = document.querySelector('#controls input');
const navControlsEl = document.querySelectorAll('#controls button');
const navContainer = document.querySelector('#boxes')
const navInputRenderElValue = navControlsEl[0];
const navInputDestroyElValue = navControlsEl[1];

console.log(navInputRenderElValue);

navInputRenderElValue.addEventListener('click', onClickRender);
navInputDestroyElValue.addEventListener('click', onClickDestroy);

function onClickRender(event) {
    navContainer.innerHTML = '';

    const navNumberEl = navInputNumberEl.value;
    console.log(navNumberEl);

    if (navNumberEl) {
        createBoxes(navNumberEl);
    }
}

function onClickDestroy(event) {
    navContainer.innerHTML = '';
}


function createBoxes(amount) {
    navContainer.setAttribute('style', 'display: flex; margin-top: 15px;');
    let size = { 'width': 30, 'height': 30 };
    const multiplier = 10;
    const itemList = []

    for (let i = 0; i < amount; i += 1) {
        const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        const itemContainer = createItemDiv(size.width, size.height, randomColor)
        itemList.push(itemContainer)
        size.width += multiplier;
        size.height += multiplier;
    }

    navContainer.append(...itemList);
}

function createItemDiv(width, height, randomColor) {
    const itemContainer = document.createElement('div');
    const style = `width: ${width}px; height: ${height}px; background-color: ${randomColor}; margin-right: 15px`;
    itemContainer.setAttribute('style', style);

    return itemContainer;
}
