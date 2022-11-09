"use strict"
import context from "../../../scripts/context.js"
import * as Utils from "../../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
function drawBackground(){
    context.fillStyle ="black";
    context.fillRect(0, 0, width, height);
}

drawDots();
function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (y < height/3) {
            context.fillStyle = "red";
        
        } else if (y < height && y > height/3*2) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 5);
    }
}