bgColor=document.querySelector("header");

function onBtnClick(){
    let dataColor= rgb(Math.floor(Math.random()*255));
    console.log(dataColor);
    bgColor.style.backgroundColor ="rgb("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")"
}