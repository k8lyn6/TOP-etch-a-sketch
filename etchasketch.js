//Initialize constant variables
const newColor = "#800080";
const gridContainer = document.getElementById("grid-container");
let allBoxes = document.getElementsByClassName("grid-box");
const gridButton = document.getElementById("grid-button");
let gridRow = 16;
let gridSize = gridRow * gridRow;

createGrid(gridSize);

gridButton.addEventListener("click", function(){
    gridRow = prompt("Please enter the size of the grid", "16");
    gridRow = parseInt(gridRow);
    gridSize = gridRow * gridRow;
    console.log(gridSize);
    clearGrid();
    createGrid(gridSize);
    setNewColor();
})

function clearGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGrid(inputSize){   
    for (let i=0; i < inputSize; i++)
    {
        var gridBox = document.createElement('div');
        gridBox.setAttribute("class", "grid-box");
        gridContainer.appendChild(gridBox);
    }  

    allBoxes = document.getElementsByClassName("grid-box");
    console.log(allBoxes);
    //allBoxes.style.width = (parseInt(gridContainer.style.width) / Math.sqrt(inputSize)) + "px";
    //allBoxes.style.height = allBoxes.style.width;
}

function setNewColor(){
    for (let i=0; i < allBoxes.length; i++){
        allBoxes[i].addEventListener("mouseover", function(){
            allBoxes[i].style.background = newColor;
        });
    }
};

setNewColor();