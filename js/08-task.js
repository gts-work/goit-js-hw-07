const refs = {
    input: document.querySelector('#controls input'),
    button: document.querySelectorAll('#controls button'),
    boxes: document.querySelector('#boxes'),
}

const navInputRenderElValue = refs.button[0];
const navInputDestroyElValue = refs.button[1];

console.log(navInputRenderElValue);

navInputRenderElValue.addEventListener('click', onClickRender);
navInputDestroyElValue.addEventListener('click', onClickDestroy);

function onClickRender(event) {
    onClickDestroy();

    const navNumberEl = refs.input.value;
    console.log(navNumberEl);

    if (navNumberEl) {
        createBoxes(navNumberEl);
    }
}

function onClickDestroy(event) {
    refs.boxes.innerHTML = '';
}


function createBoxes(amount) {
    refs.boxes.setAttribute('style', 'display: flex; margin-top: 15px;');
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

    refs.boxes.append(...itemList);
}

function createItemDiv(width, height, randomColor) {
    const itemContainer = document.createElement('div');
    const style = `width: ${width}px; height: ${height}px; background-color: ${randomColor}; margin-right: 15px`;
    itemContainer.setAttribute('style', style);

    return itemContainer;
}
