"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 600;
let height = 300;


drawRect();
function drawRect(){
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
}

// vanaf hier alle lijnen wit
context.strokeStyle = "white";

drawLines();
function drawLines(){
    let step = 10;
    let amount = 600/step;

    for (let i = 0; i <=amount; i++) {
        Utils.drawLine(0+step*i, 0, width-step*i, height);
    }
}

drawLines2();
function drawLines2(){
    let step = 10;
    let amount = height/step;

    for (let i = 0; i <=amount; i++) {
        Utils.drawLine(0, 0+step*i, width, height-step*i);
    }
}