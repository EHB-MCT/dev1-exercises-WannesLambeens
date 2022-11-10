"use strict"
import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;
let value = 10;

context.fillRect(0, 0, width, height);

drawMaze();
function drawMaze(){
    for(let j = 0; j < width/10; j++){
        for(let i = 0; i < height/10; i++){
            let way = Math.floor(Math.random()*2);
            console.log(way);
            let value = 10;
            let stepi = 10*i;
            let stepj = 10*j;

            context.lineWidth = "5";
            let r = Math.random()*255;
            let g = Math.random()*255;
            let b = Math.random()*255;
            let color = "rgb(" + r + "," + g + "," + b + ")";
            context.strokeStyle = color;

            if(way == 0){
                Utils.drawLine(0 + stepj, 0 + stepi, 10 + stepj, 10 + stepi);
            }else{
                Utils.drawLine(10 + stepj, 0 + stepi, 0 + stepj, 10 + stepi);
            }
        }
    }
}