
// title, grid, and containers 
const body = document.querySelector('body');
const div = document.createElement('div');
const grid = document.createElement('div');
const title = document.createElement('h1');

title.innerHTML = 'Etch-a-Sketch';
title.className = 'title';
div.className = 'container';
grid.className = 'grid';

// button variables 
const btnDiv = document.createElement('div');
const reset = document.createElement('button');
const changeGrid = document.createElement('button');

reset.className = 'btn';
reset.textContent = 'Reset';
changeGrid.className = 'btn';
changeGrid.textContent = 'Grid Size';

// rendering to the dom 
body.appendChild(div);
div.appendChild(title);
div.appendChild(btnDiv);
btnDiv.appendChild(reset);
btnDiv.appendChild(changeGrid);
div.appendChild(grid);

// creates grid
function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'gridItem';
    }
}; 

function gridSketch() {
    gridItem.style.backgroundColor = 'black';
}

makeGrid(64, 64);

// code for drawing on grid 
let list = grid.childNodes;


// hover to draw
list.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'black';
    })
})


// click down to draw 
// let isDrawing = false;
// list.forEach(item => {
//     item.addEventListener('mousedown', event => {  
//         isDrawing = true;
//     })
//     item.addEventListener('mousemove', event => {
//         if (isDrawing === true) {
//             item.style.backgroundColor = 'black';
//         }
//     })
//     item.addEventListener('mouseup', event => {
//         isDrawing = false;
//     })
// })

// clears the grid 
function clearGrid() {
    list.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}
reset.addEventListener('click', clearGrid);

// creates a new grid 
function newGrid() {
    let gridNum = prompt('Enter grid size: ')
    if (isNaN(gridNum) || gridNum < 0 || gridNum > 65) {
        alert('Invalid input! It has to be numeral greater than 0 and not greater than 64.');
        newGrid();
    } else {
        clearGrid();
        makeGrid(gridNum, gridNum);
    };
};
changeGrid.addEventListener('click', newGrid);