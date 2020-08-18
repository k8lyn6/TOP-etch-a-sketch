//Initialize constant variables
var newColor = "gray";
const gridContainer = document.getElementById("grid-container");
let allBoxes = document.getElementsByClassName("row");
const gridButton = document.getElementById("grid-button");
const gridButtonColor = document.getElementById("grid-button-color");
let gridRow = 16;

//Create initial 16x16 grid
createGrid(gridRow);
changeColorGrayscale();

gridButton.addEventListener("click", function(){
    getGridSize();
    clearGrid();
    createGrid(gridRow);
    changeColorGrayscale();
})

gridButtonColor.addEventListener("click", function(){
    getGridSize();
    clearGrid();
    createGrid(gridRow);
    changeColorMulti();
})

function getGridSize(){
    gridRow = prompt("Please enter the size of the grid", "16");
    gridRow = parseInt(gridRow);
    while (isNaN(gridRow)){
        gridRow = prompt("please enter the size of the grid", "16");
        gridRow = parseInt(gridRow);
    }
}

function clearGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGrid(inputSize){   
    for (let i=0; i < inputSize; i++)
    {
        let newColumn = document.createElement('div');
        newColumn.setAttribute("class", "column");
        gridContainer.appendChild(newColumn);

        for(let i=0; i < inputSize; i++){
            let gridBox = document.createElement('div');
            gridBox.setAttribute("class", "row");
            newColumn.appendChild(gridBox);
        }
    }  
    let pixels = 500/inputSize + "px";
    console.log(pixels);
    let allBoxes = document.getElementsByClassName("row");
    for (let i = 0; i < allBoxes.length; i++){
        allBoxes[i].style.width = pixels;
        allBoxes[i].style.height = pixels;
    }
}


function changeColorGrayscale(){
    newColor = "gray";
    for (let i=0; i < allBoxes.length; i++){
        allBoxes[i].addEventListener("mouseover", function(){
            allBoxes[i].style.background = newColor;
        });
    }
};

function changeColorMulti(){
    for (let i=0; i < allBoxes.length; i++){
        allBoxes[i].addEventListener("mouseover", function(){
            let r = Math.random() * 256;
            let g = Math.random() * 256;
            let b = Math.random() * 256;
            newColor = "rgb(" + r + ", " + g + ", " + b + ")";
            allBoxes[i].style.background = newColor;
        });
    }
};