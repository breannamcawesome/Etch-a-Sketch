let hoverColor = document.querySelector(`input[name="color-selector"]`);
const resizeBtn = document.getElementById("resize-button");

// DO NOT TOUCH - Function finally works, do not break again! 

function makeGrid(size) {
    const container = document.querySelector('.container');
    const total = (size * size) + size;
    const mod = size + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black;"
      }
      container.appendChild(div).className = "square";

    }
};

let squares = document.querySelectorAll(".square");


makeGrid(16); 

// Color on hover 

let drawing = false; 

    document.addEventListener('mousedown', () => {
      drawing = false; 
    }); 
    document.addEventListener('mouseup', () => {
      drawing = true; 
    });


function changeColor (x) {
    let hoverColor = document.querySelector(`input[name="color-selector"]`);
    x.style.backgroundColor = hoverColor.value;
};


container.addEventListener("mouseover", function (x){
    if(x.target && x.target.classList.contains("square") && (drawing) == true){
        changeColor(x.target);
    } else return "";
    }
);

// New Grid SIze 

resizeBtn.addEventListener("click", function resizeGrid(input) {
    input = prompt("New Size: ");
    container.innerHTML = "";
    if (0 < input && input <= 100) {
        makeGrid(input * input / input);
    }else {
        alert ("Maximum size is 100");
        makeGrid(16)
    }
    squares.style.flexBasis = `calc(100% / ${input})`;
    }
);


