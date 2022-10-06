"use strict";

//aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

//rechthoeken rode rand
function drawRectangle2 (){
    context.beginPath();
    context.strokeStyle ="red";
    context.rect(50,50,150,150);
    context.rect(200,200,150,150);
    context.rect(75,275,50,50);
    context.rect(275,75,50,50);
    context.stroke();
}
drawRectangle2();


//rechthoeken zwarte vulling
function drawRectangle1(){
    context.fillStyle ="black";
    context.beginPath();
    context.rect(125,125,150,150);
    context.rect(50,325,25,25);
    context.rect(325,50,25,25);
    context.stroke();
    context.fill();
}
drawRectangle1();

