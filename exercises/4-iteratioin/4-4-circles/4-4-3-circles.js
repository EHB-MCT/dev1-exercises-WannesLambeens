"use strict"
import context from "../../../scripts/context.js"
import * as Utils from "../../../scripts/utils.js"

let spacing = 80;


fillAndStrokeCircle();
function fillAndStrokeCircle(){
    context.strokeStyle = "transparent";
    let h = 200;
    let colour = "hsla("+ h + ", 100%, 50%, 0.3";
    context.fillStyle =colour;
    for (let i = 0; i <10; i++){
        for (let j = 0; j <10; j++) {
            Utils.fillAndStrokeCircle(spacing*i, spacing*j, spacing/5*j/2);
            }
    }
}