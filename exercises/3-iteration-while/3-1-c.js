"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let margin = 150;
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step =25;
        Utils.drawLine(50, step*i+margin, 350, step*i+margin);
        Utils.drawLine(step*i+margin, 50, step*i+margin, 350);
        i+=1;
    }
}