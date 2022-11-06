"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let jump = 100;




brick();

function brick(){
    context.fillStyle = "brown";

    for (let i = 0; i <=5; i++){

        for (let j = 0; j <=5; j++) {
            if (j%2 !== 0) {
                jump = jump + 50;
                }
            if (j%2 == 0) {
                jump = jump - 50;
                }
            context.fillRect(jump + 110*i, 50 + 55*j, 100, 50);
            }
    }
}