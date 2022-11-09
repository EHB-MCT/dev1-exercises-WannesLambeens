"use strict"
import context from "../../../scripts/context.js"
import * as Utils from "../../../scripts/utils.js"

let size = 80;


fillAndStrokeCircle();
function fillAndStrokeCircle(){
    context.strokeStyle = "transparent";
    context.fillStyle = "brown";

    for (let i = 0; i <10; i++){
        for (let j = 0; j <10; j++) {
            if (j%2 !== 0) {
                context.fillStyle = "brown";
                }
            if (j%2 == 0) {
                context.fillStyle = "lightblue";
                }
            Utils.fillAndStrokeCircle(size*i, size*j, size/2);
        }
    }
}