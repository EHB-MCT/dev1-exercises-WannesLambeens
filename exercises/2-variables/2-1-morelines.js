"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width
let height = context.canvas.height
let margin = 100


drawMoreLines();

function drawMoreLines(){
    context.beginPath();
    context.moveTo(width/2 - margin, 100);
    context.lineTo(width/2 + margin ,100);

    context.lineTo(width/2 - margin, 200);
    context.lineTo(width/2 + margin, 200);
    context.lineTo(width/2 - margin, 300);
    context.lineTo(width/2 + margin, 300);
    context.lineTo(width/2 - margin, 400);
    context.lineTo(width/2 + margin ,400);
    context.lineTo(width/2 - margin, 500);
    context.lineTo(width/2 + margin, 500);
    context.lineTo(width/2 - margin, 600);
    context.lineTo(width/2 + margin, 600);

    context.lineTo(width/2 - margin, 100);
    context.stroke();
}
