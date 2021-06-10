const container = document.querySelector('.myClass');
const reset = document.querySelector('.reset');

function makeCanvas(size){
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
            box.style.backgroundColor="gray";
            box.classList.add("drawBox");
            
            box.addEventListener('mouseover',function(o){
                o.target.style.backgroundColor="black";
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
makeCanvas(16);
let drawBoxes = document.querySelectorAll('.drawBox');

let restart= () => {
    drawBoxes = document.querySelectorAll('.drawBox');
    drawBoxes.forEach(drawBox=>{
        drawBox.style.backgroundColor="white";
    });
}
reset.addEventListener('click',restart);

function submit(){
    let boxesPerSide = document.querySelector('.boxCount').value;
    if(boxesPerSide>100){
        alert("size too large, try something less than or equal to 100");
        return;
    }
    let rows = document.querySelectorAll('.row');
    rows.forEach(function(row){
        row.parentNode.removeChild(row);
    });
    makeCanvas(boxesPerSide);
}



