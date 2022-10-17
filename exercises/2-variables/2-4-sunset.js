"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

sunset(); 

function sunset(){
    context.fillStyle = "#F3A505";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#FF6900";
    context.fillRect(0, height/4, width, height);

    context.fillStyle = "#991A00";
    context.fillRect(0, height/2, width, height);

    context.beginPath();
    context.fillStyle = "beige";
    context.ellipse(width/2, height/4*3, width/4, width/4, 0, 0, 360);
    context.fill();

    context.fillStyle = "#02025F";
    context.fillRect(0, height/4*3, width, height);

}