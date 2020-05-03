body = document.querySelector("body");
const IMG_NUMBER = 3;



function handleImgLoad(){
    console.log("finish loading");
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad);
}


function gen_num(){
    const num = Math.floor(Math.random()*IMG_NUMBER);
    return num;
}

function init(){
    const randNum = gen_num();
    paintImage(randNum);
}

init();