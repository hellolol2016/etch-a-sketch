const container = document.querySelector('.myClass');




for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    for(let i = 0; i < 16; i++){
        const box = document.createElement('div');
        box.style.width="50px";
        box.style.float="left";
        box.style.backgroundColor="gray";
        box.addEventListener('mouseover',function(o){
            o.target.style.backgroundColor="black";
        })
        row.appendChild(box);
    }
    container.appendChild(row);
}

