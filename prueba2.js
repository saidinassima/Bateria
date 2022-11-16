"use strict";
// Boton crash (plato) - tecla A
const crash = document.querySelector("#crash");
const soundCrash = new Audio("./sounds/crash.wav");
crash.addEventListener("click", () => {
  soundCrash.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 65) {
    soundCrash.play();
  }
});
// Boton hi hat open - tecla S
const hiHatOpen = document.querySelector("#hiHatOpen");
const soundHiHatOpen = new Audio("./sounds/hihat-open.wav");
hiHatOpen.addEventListener("click", () => {
  soundHiHatOpen.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 83) {
    soundHiHatOpen.play();
  }
});
// Boton hi hat close - tecla D
const hiHatClose = document.querySelector("#hiHatClose");
const soundHiHatClose = new Audio("./sounds/hihat-close.wav");
hiHatClose.addEventListener("click", () => {
  soundHiHatClose.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 68) {
    soundHiHatClose.play();
  }
});
// Boton kick (bombo) - tecla F
const kick = document.querySelector("#kick");
const soundKick = new Audio("./sounds/kick.wav");
kick.addEventListener("click", () => {
  soundKick.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 70) {
    soundKick.play();
  }
});
// Boton ride (plato) - tecla G
const ride = document.querySelector("#ride");
const soundRide = new Audio("./sounds/ride.wav");
ride.addEventListener("click", () => {
  soundRide.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 71) {
    soundRide.play();
  }
});
// Boton snare (caja) - tecla H
const snare = document.querySelector("#snare");
const soundSnare = new Audio("./sounds/snare.wav");
snare.addEventListener("click", () => {
  soundSnare.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 72) {
    soundSnare.play();
  }
});
// Boton high Tom - tecla J
const TomHigh = document.querySelector("#TomHigh");
const soundTomHigh = new Audio("./sounds/tom-high.wav");
TomHigh.addEventListener("click", () => {
  soundTomHigh.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 74) {
    soundTomHigh.play();
  }
});
// Boton Middle Tom - tecla K
const MiddleTom = document.querySelector("#MiddleTom");
const soundMiddleTom = new Audio("./sounds/tom-mid.wav");
MiddleTom.addEventListener("click", () => {
  soundMiddleTom.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 75) {
    soundMiddleTom.play();
  }
});
// Boton Middle Tom - tecla L
const LowTom = document.querySelector("#LowTom");
const soundLowTom = new Audio("./sounds/tom-low.wav");
LowTom.addEventListener("click", () => {
  soundLowTom.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 76) {
    soundLowTom.play();
  }
});
