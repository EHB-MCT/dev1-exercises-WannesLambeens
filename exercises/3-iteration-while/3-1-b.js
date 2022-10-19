"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let margin = 50;

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i<6) {
        let x = 75;
        let y = x;
        Utils.drawLine(75, y +margin*i, 325, y+margin*i);
        Utils.drawLine(x+margin*i, 75, x+margin*i, 325);
        i+=1;
    }
}