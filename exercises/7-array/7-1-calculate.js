"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let randomNumbers = [];
let som = 0;
let average;
randomize();
calculateAverage();

//random numbers
function randomize(){
    for (let i = 0; i < 1000; i++) {
        randomNumbers[i] = Math.random()*100;
    }
    //console.log(randomNumbers);
}

//calculate
function calculateAverage(){
    for(let i = 0; i < 1000; i++) {
        som += randomNumbers[i];
    }
    //console.log(som);
    average = som/1000;
    console.log(average);
}