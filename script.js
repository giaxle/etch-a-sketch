const body = document.querySelector('body');
const div = document.createElement('div');
const grid = document.createElement('div');
const title = document.createElement('h1');

title.innerHTML = 'Etch-a-Sketch';

title.className = 'title';
div.className = 'container';
grid.className = 'grid';

body.appendChild(div);
div.appendChild(title);
div.appendChild(grid);


function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);

    let cell = document.createElement('div');

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'gridItem';
    }
}; 

function gridSketch() {
    gridItem.style.backgroundColor = 'black';
}

makeGrid(64, 64);

const gridItem = document.querySelectorAll('gridItem');
document.getElementsByClassName('gridItem').style.backgroundColor = 'black';
