// Get polygon elements
const polygon1 = document.getElementById('polygon1');
const polygon2 = document.getElementById('polygon2');

// Get draggable element
const draggable = document.getElementById('draggable-container');

// Set up event listeners
draggable.addEventListener('mousedown', startDrag);
draggable.addEventListener('mousemove', drag);
draggable.addEventListener('mouseup', endDrag);

// Set initial position
let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;

function startDrag(e) {
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
}

function drag(e) {
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;

  // Update position of draggable element
  draggable.style.left = startX + 'px';
  draggable.style.top = startY + 'px';

  // Update position of squiggly line
  const x1 = polygon1.offsetLeft + polygon1.offsetWidth;
  const y1 = polygon1.offsetTop + polygon1.offsetHeight / 2;
  const x2 = polygon2.offsetLeft;
  const y2 = polygon2.offsetTop + polygon2.offsetHeight / 2;

  const path = `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2} ${x2} ${y2}`;
  const squigglyLine = document.getElementById('squiggly-line');
  squigglyLine.setAttribute('d', path);
}

function endDrag(e) {
  // Do nothing for now
}
