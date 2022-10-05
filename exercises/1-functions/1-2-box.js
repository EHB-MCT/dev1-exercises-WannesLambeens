"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');


function drawBox(){
    //aanmaken box
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.lineTo(200,200);
    context.lineTo(200,50);
    context.lineTo(50,50);
    context.stroke();

    //aanmaken rode kruis
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();
}
drawBox();