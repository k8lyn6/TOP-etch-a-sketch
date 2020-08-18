//Initialize constant variables
const newColor = "gray";
const gridContainer = document.getElementById("grid-container");
let allBoxes = document.getElementsByClassName("row");
const gridButton = document.getElementById("grid-button");
let gridRow = 16;

createGrid(gridRow);

gridButton.addEventListener("click", function(){
    gridRow = prompt("Please enter the size of the grid", "16");
    gridRow = parseInt(gridRow);
    clearGrid();
    createGrid(gridRow);
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

function setNewColor(){
    for (let i=0; i < allBoxes.length; i++){
        allBoxes[i].addEventListener("mouseover", function(){
            allBoxes[i].style.background = newColor;
        });
    }
};

setNewColor();