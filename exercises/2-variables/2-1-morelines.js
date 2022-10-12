"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width
let height = context.canvas.height
let margin = 100
let step = 100


drawMoreLines();

function drawMoreLines(){
    context.beginPath();
    context.moveTo(width/2 - margin, step);
    context.lineTo(width/2 + margin , step);

    context.lineTo(width/2 - margin, step*2);
    context.lineTo(width/2 + margin, step*2);
    context.lineTo(width/2 - margin, step*3);
    context.lineTo(width/2 + margin, step*3);
    context.lineTo(width/2 - margin, step*4);
    context.lineTo(width/2 + margin ,step*4);
    context.lineTo(width/2 - margin, step*5);
    context.lineTo(width/2 + margin, step*5);
    context.lineTo(width/2 - margin, step*6);
    context.lineTo(width/2 + margin, step*6);

    context.lineTo(width/2 - margin, 100);
    context.stroke();
}
