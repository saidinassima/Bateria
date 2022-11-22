"use strict";
const sound = {
  b: "crash.wav",
  q: "hihat-close.wav",
  o: "hihat-open.wav",
  v: "kick.wav",
  e: "ride.wav",
  w: "snare.wav",
  r: "tom-high.wav",
  i: "tom-low.wav",
  u: "tom-mid.wav",
};
let sessionRecord = [];
let isRecording = false;
const bateria = document.querySelector("#bateria");
bateria.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const key = event.target.textContent.toLowerCase();
  new Audio(`/sounds/${sound[key]}`).play();
  if (isRecording) {
    sessionRecord.push({ key, timeNote: Date.now() });
    console.log(sessionRecord);
  }
});
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (!(key in sound)) {
    return;
  }
  new Audio(`/sounds/${sound[key]}`).play();
  if (isRecording) {
    sessionRecord.push({ key, timeNote: Date.now() });
    console.log(sessionRecord);
  }
});
const recBtn = document.querySelector("#rec");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");
recBtn.addEventListener("click", () => {
  isRecording = true;
  recBtn.classList.add("recording");
  sessionRecord = [];
});
stopBtn.addEventListener("click", () => {
  isRecording = false;
  recBtn.classList.remove("recording");
});

playBtn.addEventListener("click", () => {
  if (isRecording) {
    return;
  }
  for (let i = 0; i < sessionRecord.length; i++) {
    setTimeout(() => {
      new Audio(`/sounds/${sound[sessionRecord[i].key]}`).play();
    }, sessionRecord[i].timeNote - sessionRecord[0].timeNote);
  }
});

// playBtn.addEventListener("click", () => {
//   if (isRecording) {
//     return;
//   }

//   new Audio(`/sounds/${sound[sessionRecord[0].key]}`).play();

//   for (let notas of sessionRecord) {
//     console.log(notas);
//     // console.log(sound[sessionRecord[notas].key]);
//     // new Audio(`/sounds/${sound[sessionRecord[notas].key]}`).play();
//     // sessionRecord[notas] - sessionRecord[0];
//     // console.log(sessionRecord[notas]);
//   }

//   for (let notas = 1; notas > 0; notas++) {
//     setTimeout(() => {
//       if (notas === sessionRecord.length) {
//         notas = 1;
//       }
//       // timeNote = 0;
//       // console.log(timeNote);

//       new Audio(`/sounds/${sound[sessionRecord[notas.key]]}`).play();
//     }, sessionRecord[notas.timeNote] - sessionRecord[0].timeNote);
//     break;
//   }
// });
// //   setTimeout(() => {
//     new Audio(`/sounds/${sound[sessionRecord[item].key]}`).play();
//   }, sessionRecord[item].timeNote - sessionRecord[0].timeNote);
// });

//   new Audio(`/sounds/${sound[sessionRecord[0].key]}`).play();

//   for (let item of sessionRecord) {
//     setTimeout(() => {
//       new Audio(`/sounds/${sound[sessionRecord[item].key]}`).play();
//     },

//     sessionRecord[item].timeNote - sessionRecord[0].timeNote);
//   }
// });

// sessionRecord.forEach(setTimeout => {

// });

//   setTimeout(() => {
//     new Audio(`/sounds/${sound[sessionRecord[].key]}`).play();
//   }, sessionRecord[] - sessionRecord[].timeNote);
// });
// for(let i=0; i=sessionRecord.length; i++)
// Date.now();
// setTimeout()
