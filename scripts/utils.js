"use strict";
import context from "./context.js";

/**
 * Draws a line between 2 points
 * @param {number} x1 coordinate begin x 
 * @param {number} y1 coordinate begin y
 * @param {number} x2 coordinate end x
 * @param {number} y2 coordinate end y
 */
export function drawLine (x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}



/**
 * Draws a circle 
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} radius radius of the circle
 */
export function strokeCircle(x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.stroke();
}

/**
 * 
 * @param {number} r red number between 0 and 255
 * @param {number} g green number between 0 and 255
 * @param {number} b blue number between 0 and 255
 */
export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

/**
 * Draws a filled circle 
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} radius radius of the circle
 */
 export function fillAndStrokeCircle(x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.stroke();
    context.fill();
}


/**
 * Draws a filled circle
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} rX X radius
 * @param {*} rY Y radius
 */
 export function fillAndStrokeEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2);
    context.stroke();
    context.fill();
}