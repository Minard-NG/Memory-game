var boxes = document.getElementsByClassName("box");
const shuffle = ()=>{
    console.log("Hello");
    var boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach( (box)=>{
        box.style.order = Math.floor(Math.random()*16);
    }

    );
}
// const button = document.getElementById("bt");
// button.addEventListener("click", shuffle);

const buttonx = document.getElementById("btn");
buttonx.addEventListener("click", shuffle);