// Get the shape and line elements from the HTML
const shape1 = document.getElementById("shape1");
const shape2 = document.getElementById("shape2");
const line = document.getElementById("line");

// Variables for the positions of the shapes
let shape1X, shape1Y, shape2X, shape2Y;

// Function for starting to drag the first shape
function startDragShape1(event) {
  // Calculate the initial position of the mouse relative to the shape
  const initialX = event.clientX - shape1X;
  const initialY = event.clientY - shape1Y;

  // Add event listeners for moving and stopping the drag
  document.addEventListener("mousemove", dragShape1);
  document.addEventListener("mouseup", stopDragShape1);

  // Function for dragging the first shape
  function dragShape1(event) {
    // Calculate the new position of the shape
    let newX = event.clientX - initialX;
    let newY = event.clientY - initialY;

    // Check if the new position is within the bounds of the page
    if (newX < 0) {
      newX = 0;
    } else if (newX > window.innerWidth - shape1.offsetWidth) {
      newX = window.innerWidth - shape1.offsetWidth;
    }
    if (newY < 0) {
      newY = 0;
    } else if (newY > window.innerHeight - shape1.offsetHeight) {
      newY = window.innerHeight - shape1.offsetHeight;
    }

    // Move the shape to the new position
    shape1.style.left = newX + "px";
    shape1.style.top = newY + "px";

    // Update the position variables
    shape1X = newX;
    shape1Y = newY;

    // Redraw the line
    redrawLine();
  }

  // Function for stopping the drag of the first shape
  function stopDragShape1() {
    // Remove the event listeners
    document.removeEventListener("mousemove", dragShape1);
    document.removeEventListener("mouseup", stopDragShape1);
  }
}

// Function for starting to drag the second shape
function startDragShape2(event) {
  // Calculate the initial position of the mouse relative to the shape
  const initialX = event.clientX - shape2X;
  const initialY = event.clientY - shape2Y;

  // Add event listeners for moving and stopping the drag
  document.addEventListener("mousemove", dragShape2);
  document.addEventListener("mouseup", stopDragShape2);

  // Function for dragging the second shape
  function dragShape2(event) {
    // Calculate the new position of the shape
    let newX = event.clientX - initialX;
    let newY = event.clientY - initialY;

    // Check if the new position is within the bounds of the page
    if (newX < 0) {
      newX = 0;
    } else if (newX > window.innerWidth - shape2.offsetWidth) {
      newX = window.innerWidth - shape2.offsetWidth;
    }
    if (newY < 0) {
      newY = 0;
    } else if (newY > window.innerHeight - shape2.offsetHeight) {
      newY = window.innerHeight - shape2.offsetHeight;
    }

    // Move the shape to the new position
    shape2.style.left = newX + "px";
    shape2.style.top = newY + "px";

    // Update the position variables
    shape2X = newX;
    shape2Y = newY;

    // Redraw the line
    redrawLine();
  }

  // Function for stopping the drag of the second shape
  function stopDragShape2() {
    // Remove the event listeners
    document.removeEventListener("mousemove", dragShape2);
    document.removeEventListener("mouseup", stopDragShape2);
}
}

// Function for redrawing the line
function redrawLine() {
    // Calculate the positions of the nodes on the shapes
    const node1X = shape1X + shape1.offsetWidth / 2;
    const node1Y = shape1Y + shape1.offsetHeight / 2;
    const node2X = shape2X + shape2.offsetWidth / 2;
    const node2Y = shape2Y + shape2.offsetHeight / 2;
  
    // Calculate the distance and angle between the nodes
    const dx = node2X - node1X;
    const dy = node2Y - node1Y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
  
    // Calculate the positions of the endpoints of the line
    const endPoint1X = node1X + Math.cos(angle) * shape1.offsetWidth / 2;
    const endPoint1Y = node1Y + Math.sin(angle) * shape1.offsetHeight / 2;
    const endPoint2X = node2X - Math.cos(angle) * shape2.offsetWidth / 2;
    const endPoint2Y = node2Y - Math.sin(angle) * shape2.offsetHeight / 2;
  
    // Set the attributes of the line element to draw the line
    line.setAttribute("x1", endPoint1X);
    line.setAttribute("y1", endPoint1Y);
    line.setAttribute("x2", endPoint2X);
    line.setAttribute("y2", endPoint2Y);
  }

// Initialize the positions of the shapes and redraw the line
shape1X = shape1.offsetLeft;
shape1Y = shape1.offsetTop;
shape2X = shape2.offsetLeft;
shape2Y = shape2.offsetTop;
redrawLine();

// Add event listeners for starting the drag of the shapes
shape1.addEventListener("mousedown", startDragShape1);
shape2.addEventListener("mousedown", startDragShape2);
