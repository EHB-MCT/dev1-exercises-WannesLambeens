"use strict";
import context from "../../scripts/context.js";

let step = 25;
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 1;
    while (i<=7) {
        context.strokeRect(50+i*step, 50+i*step, 100, 100);
        i+=1;
    }
}
