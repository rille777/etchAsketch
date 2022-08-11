const container = document.querySelector('#sketchContainer');
const resetButton = document.querySelector(".rightKnob")

promptSize();

  function makeGrid(number) {
    container.style.gridTemplateColumns = `repeat(${number} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${number} , 1fr)`;

    let amount = number * number;
    
    for (let i = 0; i < amount; i++) {
      let box = document.createElement("div");
      box.classList.add('box');
      container.appendChild(box);
      box.addEventListener("mouseover", changeColor);  
    }
}


function changeColor() {
  this.style.backgroundColor = 'black'; 
}

//This ask the player for the grid size, between 2 and 100, 16 is default which player can see on the popup window
function promptSize() {
  let number = prompt("Choose grid size between 2-100!", 16); 
   if (number >= 2 && number <= 100) {
    makeGrid(number);
   }else {
       do {
           number = prompt("Please select between 2-100");
       }
       while(number < 2 || number > 100);
       makeGrid(number);
   }
}


resetButton.addEventListener('click', function(){
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "lightgray"));
  
});