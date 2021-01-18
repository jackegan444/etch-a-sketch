const gridContainer = document.querySelector('#grid-container');
const sizeInput = document.querySelector('#size-input')
const sizeBtn = document.querySelector('#size-btn');
const colorBtns = document.getElementsByClassName("color-button");
const sketchGrid = [];
let penColor = 'black'

function changePenColor(e) {
    penColor = e.target.getAttribute('data-color');
}

function changeTileColor(e) {
    e.target.style.cssText = `background: ${penColor}`;
}

function setGridSize(e) {
    gridContainer.innerHTML = '';
    sketchGrid.length = 0;
    const gridSize = sizeInput.value;
    for (let i = 0; i < gridSize; i++) {
        sketchGrid.push([]);
        for (let j = 0; j < gridSize; j++) {
            sketchGrid[i].push(document.createElement('div'));
            sketchGrid[i][j].classList.add('grid-space');
            sketchGrid[i][j].style.cssText = `grid-column: ${j + 1}; grid-row: ${i + 1}`;
            sketchGrid[i][j].addEventListener('mouseover', changeTileColor);
            gridContainer.appendChild(sketchGrid[i][j]);
        }
    }
}

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].style.cssText = `background-color: ${colorBtns[i].getAttribute('data-color')}`;
    colorBtns[i].addEventListener('click', changePenColor);
}

sizeBtn.addEventListener('click', setGridSize);
setGridSize();
