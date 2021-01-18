const gridContainer = document.querySelector('#grid-container');
const sketchGrid = [];

for (let i = 0; i < 16; i++) {
    sketchGrid.push([]);
    for (let j = 0; j < 16; j++) {
        sketchGrid[i].push(document.createElement('div'));
        sketchGrid[i][j].classList.add('grid-space');
        sketchGrid[i][j].style.cssText = `grid-column: ${j + 1}; grid-row: ${i + 1}`;
        sketchGrid[i][j].textContent = 'yep';
        gridContainer.appendChild(sketchGrid[i][j]);
    }
}
