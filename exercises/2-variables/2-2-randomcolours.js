"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

//meerdere vierkanten maken
drawRect(50,400);
drawRect(75,350);
drawRect(100,300)
drawRect(125,250);
drawRect(150,200);
drawRect(175,150);
drawRect(200,100);
drawRect(225,50);

function drawRect(pos, size){
    //aanmaken random color
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);
    
}
