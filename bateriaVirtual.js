"use strict";

// Boton Hi Hat Close - tecla Q || q
const hiHatClose = document.querySelector("#hiHatClose");

function playHiHatClose() {
  const soundHiHatClose = new Audio("./sounds/hihat-close.wav");
  soundHiHatClose.play();
  return soundHiHatClose.play();
}

hiHatClose.addEventListener("click", playHiHatClose);

document.addEventListener("keydown", (event) => {
  // event.code y event.key NO FUNCIONA EN CHROME (Ubuntu). En cambio, event.key FUNCIONA EN FIREFOX.
  if (event.key === "Q" || event.key === "q") {
    playHiHatClose();
  }
});

// Boton snare (caja)  - tecla W || w
const snare = document.querySelector("#snare");

function playSnare() {
  const soundSnare = new Audio("./sounds/snare.wav");
  soundSnare.play();
  return soundSnare.play();
}

snare.addEventListener("click", playSnare);

document.addEventListener("keydown", (event) => {
  if (event.key === "W" || event.key === "w") {
    playSnare();
  }
});

// Boton ride (plato) - tecla E ||e
const ride = document.querySelector("#ride");

function playRide() {
  const soundRide = new Audio("./sounds/ride.wav");
  soundRide.play();
  return soundRide.play();
}

ride.addEventListener("click", playRide);

document.addEventListener("keydown", (event) => {
  if (event.key.toLocaleLowerCase() === "e") {
    playRide();
  }
});

// Boton high Tom - tecla R ||r
const TomHigh = document.querySelector("#TomHigh");

function playTomHigh() {
  const soundTomHigh = new Audio("./sounds/tom-high.wav");
  soundTomHigh.play();
  return soundTomHigh.play();
}

TomHigh.addEventListener("click", playTomHigh);

document.addEventListener("keydown", (event) => {
  if (event.key === "R" || event.key === "r") {
    playTomHigh();
  }
});

// Boton kick (bombo) - tecla V ||v
const kick = document.querySelector("#kick");

function playKick() {
  const soundKick = new Audio("./sounds/kick.wav");
  soundKick.play();
  return soundKick.play();
}

kick.addEventListener("click", playKick);

document.addEventListener("keydown", (event) => {
  if (event.key === "V" || event.key === "v") {
    playKick();
  }
});

// Boton Middle Tom - tecla U ||u
const MiddleTom = document.querySelector("#MiddleTom");

function playMiddleTom() {
  const soundMiddleTom = new Audio("./sounds/tom-mid.wav");
  soundMiddleTom.play();
  return soundMiddleTom.play();
}

MiddleTom.addEventListener("click", playMiddleTom);

document.addEventListener("keydown", (event) => {
  if (event.key === "U" || event.key === "u") {
    playMiddleTom();
  }
});

// Boton crash (plato) - tecla B || b
const crash = document.querySelector("#crash");

function playCrash() {
  const soundCrash = new Audio("./sounds/crash.wav");
  soundCrash.play();
  return soundCrash.play();
}

crash.addEventListener("click", playCrash);

document.addEventListener("keydown", (event) => {
  if (event.key === "B" || event.key === "b") {
    playCrash();
  }
});

// // Boton Low Tom - tecla I || i
const LowTom = document.querySelector("#LowTom");

function playLowTom() {
  const soundLowTom = new Audio("./sounds/tom-low.wav");
  soundLowTom.play();
  return soundLowTom.play();
}

LowTom.addEventListener("click", playLowTom);

document.addEventListener("keydown", (event) => {
  if (event.key === "I" || event.key === "i") {
    playLowTom();
  }
});

// Boton Hi Hat Open - tecla O || o
const hiHatOpen = document.querySelector("#hiHatOpen");

function playHiHatOpen() {
  const soundHiHatOpen = new Audio("./sounds/hihat-open.wav");
  soundHiHatOpen.play();
  return soundHiHatOpen.play();
}
hiHatOpen.addEventListener("click", playHiHatOpen);

document.addEventListener("keydown", (event) => {
  if (event.key === "O" || event.key === "o") {
    playHiHatOpen();
  }
});

// CODIGO PARA GRABAR LA SECUENCIA

const alertGrabar = document.querySelector("#grabacion");
alertGrabar.addEventListener("click", () => {
  alert("☹️ Lo sentimos, esa funcionalidad todavía no está disponible.");
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
