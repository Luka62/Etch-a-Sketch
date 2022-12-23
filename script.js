const container = document.querySelector('.container');

// create a Grid
function createGrid (gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

// default grid size when loading
createGrid(16);

// function for grid color
function colorGrid () {
    this.style.backgroundColor = 'black';
}

// function to reset grid board with reset button
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', resetGrid);

function resetGrid () {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
}

// select size with select button between 0 and 100
