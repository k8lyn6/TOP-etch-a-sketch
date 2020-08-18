const newColor = "#800080";
const allBoxes = document.getElementsByClassName("grid-box");

function createGrid(){
    for (i=0; i < 256; i++)
    {
        var gridBox = document.createElement('div');
        gridBox.setAttribute("class", "grid-box");
        document.getElementById("grid-container").appendChild(gridBox);
    }
}


function setNewColor(){
    for (let i=0; i < allBoxes.length; i++){
        allBoxes[i].addEventListener("mouseover", function(){
            allBoxes[i].style.background = newColor;
        });
    }
};

createGrid();
setNewColor();