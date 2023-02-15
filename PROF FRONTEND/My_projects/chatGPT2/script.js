const boxes = document.querySelectorAll('.box');
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
const shapes = ['square', 'circle', 'triangle', 'star', 'pentagon'];

const speeds = [5, 7];
let posXs = [0, 0];
let posYs = [0, 0];
let directionXs = [1, 1];
let directionYs = [1, 1];
let angles = [0, 0];
let rotations = [3, 5];

function moveBox(index) {
  // Update position and rotation
  posXs[index] += speeds[index] * directionXs[index];
  posYs[index] += speeds[index] * directionYs[index];
  angles[index] += rotations[index];
  boxes[index].style.transform = `translate(${posXs[index]}px, ${posYs[index]}px) rotate(${angles[index]}deg)`;

  const boxRect = boxes[index].getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Check if box hits left or right edge
  if (boxRect.right >= screenWidth || boxRect.left <= 0) {
    directionXs[index] *= -1;
    changeBox(index);
  }

  // Check if box hits top or bottom edge
  if (boxRect.bottom >= screenHeight || boxRect.top <= 0) {
    directionYs[index] *= -1;
    changeBox(index);
  }
}

function changeBox(index) {
  // Choose a random color and shape
  const color = colors[Math.floor(Math.random() * colors.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  // Choose a random rotation speed
  rotations[index] = Math.floor(Math.random() * 10) + 1;

  // Change the box's color and shape
  boxes[index].style.backgroundColor = color;
  boxes[index].className = `box ${shape}`;
}

setInterval(() => moveBox(0), 10);
setInterval(() => moveBox(1), 15);
