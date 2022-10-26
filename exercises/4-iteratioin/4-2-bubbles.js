"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let canvasWidth = width-550;
let canvasHeigth = height-550;


drawBackground();
function drawBackground(){
    context.fillStyle ="black";
    context.fillRect(0, 0, width, height);
}

drawBubbles();
function drawBubbles(){
    context.strokeStyle = "transparent";

    for (let i = 0; i < 100; i++) {
        let h = Math.random()*200;
        let colour = "hsla("+ h + ", 100%, 50%, 0.5";
        context.fillStyle =colour;
        Utils.fillAndStrokeCircle(Math.random()*canvasWidth+275, Math.random()*canvasHeigth+275, Math.random()*75);
    }
}