"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

//aanmaken variabelen
let width = context.canvas.width
let height = context.canvas.height

drawPattern();

function drawPattern(){
//kleuren opgezocht via adobe illustrator (kan niet 100% correct zijn)

    context.fillStyle = "#F7F7F7";
    context.fillRect(50, 50, width/2, height/2);

    context.fillStyle = "#27385B";
    context.fillRect(50, 50, width/6, height/2);

    context.fillRect(width/3 + 50, 50, width/6, height/2);

    context.fillStyle = "#69A2F4";
    context.fillRect(50, height/3 + 50, width/6, height/6);
    context.fillRect(width/3 + 50, height/3 + 50, width/6, height/6);

    context.fillStyle = "#FF4343";
    context.fillRect(50, height/12 + 50, width/2, height/6);
}