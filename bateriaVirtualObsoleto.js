"use strict";
// Boton crash (plato) - tecla A
const crash = document.querySelector("#crash");

function playCrash() {
  const soundCrash = new Audio("./sounds/crash.wav");
  soundCrash.play();
  return soundCrash.play();
}

crash.addEventListener("click", playCrash);

document.addEventListener("keydown", (event) => {
  // event.code y event.key NO FUNCIONA EN CHROME (Ubuntu). En cambio, event.key FUNCIONA EN FIREFOX.
  if (event.key === "A" || event.key === "a") {
    playCrash();
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
hiHatClose.addEventListener("click", () => {
  const soundHiHatClose = new Audio("./sounds/hihat-close.wav");
  soundHiHatClose.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 68) {
    soundHiHatClose.play();
  }
});
// Boton kick (bombo) - tecla F
const kick = document.querySelector("#kick");
kick.addEventListener("click", () => {
  const soundKick = new Audio("./sounds/kick.wav");
  soundKick.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 70) {
    soundKick.play();
  }
});
// Boton ride (plato) - tecla G
const ride = document.querySelector("#ride");
ride.addEventListener("click", () => {
  const soundRide = new Audio("./sounds/ride.wav");
  soundRide.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 71) {
    soundRide.play();
  }
});
// Boton snare (caja) - tecla H
const snare = document.querySelector("#snare");
snare.addEventListener("click", () => {
  const soundSnare = new Audio("./sounds/snare.wav");
  soundSnare.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 72) {
    soundSnare.play();
  }
});
// Boton high Tom - tecla J
const TomHigh = document.querySelector("#TomHigh");
TomHigh.addEventListener("click", () => {
  const soundTomHigh = new Audio("./sounds/tom-high.wav");
  soundTomHigh.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 74) {
    soundTomHigh.play();
  }
});
// Boton Middle Tom - tecla K
const MiddleTom = document.querySelector("#MiddleTom");

MiddleTom.addEventListener("click", () => {
  const soundMiddleTom = new Audio("./sounds/tom-mid.wav");
  soundMiddleTom.play();
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 75) {
    playMiddleTom();
  }
});
// Boton Low Tom - tecla L
const LowTom = document.querySelector("#LowTom");
LowTom.addEventListener("click", () => {
  const soundLowTom = new Audio("./sounds/tom-low.wav");
  soundLowTom.play();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 76) {
    soundLowTom.play();
  }
});

// const audio = [
//   soundCrash,
//   soundHiHatOpen,
//   soundHiHatClose,
//   soundKick,
//   soundRide,
//   soundSnare,
//   soundTomHigh,
//   soundMiddleTom,
//   soundLowTom,
// ];
// const rec = document.getElementById("rec");
// const play = document.getElementById("play");
// const pause = document.getElementById("stop");
// const nuevoAudio = [];
// for (let i = 1; i <= audio.lenght; i++) {
//   rec.addEventListener("click", () => {
//     audio.forEach((element) => {
//       nuevoAudio.unshift(element);
//     });
//   });
// }
