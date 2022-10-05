"use strict";

//Aanmaken canvas + context
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

//Functie voor Wannes
function drawName(){
    //Letter W
    context.beginPath();
    context.strokeStyle ="red";
    context.lineWidth ="4";
    context.moveTo(50,25);
    context.lineTo(50,300);
    context.lineTo(100,100);
    context.lineTo(150,300);
    context.lineTo(150,25);
    context.stroke();

    //Letter A
    context.beginPath();
    context.strokeStyle ="green";
    context.moveTo(300,300);
    context.lineTo(350,25);
    context.lineTo(400,300);
    context.lineTo(300,200);
    context.stroke();

    //Letter N
    context.beginPath();
    context.strokeStyle = "Blue";
    context.moveTo(550,300);
    context.lineTo(550,25);
    context.lineTo(600,300);
    context.lineTo(600,25);
    context.stroke();

    //Letter N
    context.beginPath();
    context.strokeStyle = "Yellow";
    context.moveTo(700,300);
    context.lineTo(700,25);
    context.lineTo(750,300);
    context.lineTo(750,25);
    context.stroke();

    //Letter E
    context.beginPath();
    context.strokeStyle = "pink";
    context.moveTo(850,25);
    context.lineTo(850,300);
    context.moveTo(850,25);
    context.lineTo(950,25);
    context.moveTo(850,150);
    context.lineTo(900,150);
    context.moveTo(850,300);
    context.lineTo(950,300);
    context.stroke();

    //Letter S
    context.beginPath();
    context.strokeStyle ="brown";
    context.moveTo(1100,25);
    context.lineTo(1050,125);
    context.lineTo(1100,225)
    context.lineTo(1050,300);
    context.stroke();
}
drawName();
