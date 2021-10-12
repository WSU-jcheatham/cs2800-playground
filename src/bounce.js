const frame = document.querySelector('#frame');
const maxSide = 200;
const minSide = 50;
const maxX = frame.clientWidth;
const maxY = frame.clientHeight;

function perturb(value, max) {
  const delta = Math.floor(Math.random() * max);
  const isNeg = Math.random() < 0.5;
  return value + (isNeg ? -delta : delta);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


let width = 40;
let height = 80;
let top = randInt(0, maxY - height);
let left = randInt(0, maxX - width);
let xDir = randInt(5, 10);
let yDir = randInt(5, 10);

let r = 100;
let rd = 5;
let g = 10;
let gd = 10;
let b = 200;
let bd = 20;

for (let i = 0; i < 1000; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.background = `rgb(${r}, ${g}, ${b})`;
  frame.append(box);

  // update box stuff for next loop pass

  if (top + yDir + height > maxY) {
    yDir = -randInt(1, 8);
  } else if (top + yDir < 0) {
    yDir = randInt(1, 8);
  }

  top += yDir;

  if (left + xDir + width > maxX) {
    xDir = -randInt(1, 8);
  } else if (left + xDir < 0) {
    xDir = randInt(1, 8);
  }

  left += xDir;

  r += rd;
  if (r > 255 || r < 0) {
    rd = -rd;
    r += rd;
  }

  g += gd;
  if (g > 255 || g < 0) {
    gd = -gd;
    g += gd;
  }

  b += bd;
  if (b > 255 || b < 0) {
    bd = -bd;
    b += bd;
  }
}
