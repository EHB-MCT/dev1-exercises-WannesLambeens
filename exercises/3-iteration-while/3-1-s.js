"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    while (i <= 14) {
        let gray =255-(255/14)*i;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50+20*i, 50+8*i, 10, 250-16.5*i);
        i++;
    }
}