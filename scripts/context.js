"use strict";

/**
 * @type {CanvasRenderingContext2D}
 */

let context;

setupCanvasContext();

export default context;

function setupCanvasContext(){
    let canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    context = canvas.getContext('2d');
}