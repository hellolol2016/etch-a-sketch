const container = document.querySelector('.myClass');
const reset = document.querySelector('.reset');

let coloringMode = "pen";
function makeCanvas(size, color){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add("row");
        row.style.width="800px"
        row.style.height=800/size+"px";
        for(let i = 0; i < size; i++){
            lw = 800/size;
            const box = document.createElement('div');
            box.style.width=lw+"px";
            box.style.height=lw+"px";
            box.style.float="left";
            box.style.backgroundColor="white";
            box.classList.add("drawBox");
            if(color ==="pen"){
                box.addEventListener('mouseover',function(o){
                    o.target.style.backgroundColor="black";
                })
                console.log("pen selected");
            }
            
            if(color === "pencil"){
                let shade = 5;
                box.addEventListener("mouseover",function(o){
                    o.target.style.backgroundColor="black";
                    o.target.style.opacity= `${shade+=5}%`;
                })
                console.log("pencil selected")
            }

            if(color === "random"){
                box.addEventListener("mouseover",function(o){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    o.target.style.backgroundColor=`#${randomColor}`;
                })
                console.log("random selected")
            }
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
makeCanvas(16, coloringMode);

let drawBoxes = document.querySelectorAll('.drawBox');
let restart= () => {
    drawBoxes = document.querySelectorAll('.drawBox');
    drawBoxes.forEach(drawBox=>{
        drawBox.style.backgroundColor="white";
    });
}
reset.addEventListener('click',restart);
let boxesPerSide = 16;
function removeRows(){
    let rows = document.querySelectorAll('.row');
    rows.forEach(function(row){
        row.parentNode.removeChild(row);
    });
}
function submit(){
    boxesPerSide = document.querySelector('.boxCount').value;
    if(boxesPerSide>100){
        alert("size too large, try something less than or equal to 100");
        return;
    }
    removeRows();
    makeCanvas(boxesPerSide, coloringMode);
}

function pencil(){
    removeRows();
    coloringMode = "pencil";
    makeCanvas(boxesPerSide,coloringMode);
    console.log("changed color to pencil")
}

function pen(){
    removeRows();
    coloringMode = "pen";
    makeCanvas(boxesPerSide,coloringMode);
    console.log("changed color to pen")
}

function random(){
    removeRows();
    coloringMode = "random";
    makeCanvas(boxesPerSide,coloringMode);
    console.log("changed color to random")
}

   
const pencilColor = document.querySelector(".pencil");
pencilColor.addEventListener("click",pencil);
const penColor = document.querySelector(".pen");
penColor.addEventListener("click",pen);
const randomColor = document.querySelector(".random");
randomColor.addEventListener("click",random );