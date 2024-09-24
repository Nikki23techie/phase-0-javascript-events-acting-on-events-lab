// Your code here
const dodger = document.getElementById("dodger");
//dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
     
    }
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const pos = parseInt(leftNumbers, 10);
    console.log("moveLeft:" + pos);
    if (pos > 0) { 
        dodger.style.left = `${pos - 1}px`;
        (pos -1)  +  "px"
    }
}

function moveDodgerRight()  {
    const leftNumbers = dodger.style.left.replace("px", "");
    const pos = parseInt(leftNumbers, 10);
    console.log("moveRight:" + pos);
    if (pos < 256) {
        dodger.style.left = `${pos + 1}px`;
    }
}
  


