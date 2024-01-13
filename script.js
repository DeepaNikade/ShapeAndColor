

function getRandomColor(){
    const letters='0123456789ABCDEF';
    let colors="#";
    for(let i=0;i<6;i++){
        colors+=letters[Math.floor(Math.random()*16)];
    }
    return colors;
}

function changeColor(){
    const shape=document.getElementById('shape');
    shape.style.backgroundColor=getRandomColor();
}




function changeShape(){
    const shapes=['circle','triangle','pentagon','rohmbus','star'];
    let randomShapesIndex=Math.floor(Math.random()*shapes.length);
    document.querySelector(".shape>div").setAttribute("class",shapes[randomShapesIndex]);
}
