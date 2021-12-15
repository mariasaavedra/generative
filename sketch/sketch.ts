// GLOBAL VARS & TYPES
//let numberOfShapesControl: p5.Element;
const iterationCount = 100;
let yoff = 0.0; 
let xoff = -12;
// P5 will automatically use global mode if a draw() function is defined
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  stroke(255); // Set line drawing color to white
  frameRate(30);
  createCanvas(windowWidth, windowHeight)
}
// called on window resize.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function makeWave(){
    // We are going to draw a polygon out of the wave points
    beginShape(); 
       // Option #1: 2D Noise
    // float xoff = yoff; // Option #2: 1D Noise
    // Iterate over horizontal pixels
    for (let x = -1200; x <= width; x += 5) {
      // Calculate a y value according to noise, map to 
      const y = map(noise(xoff, yoff), 0, .75, 300, 1); // Option #1: 2D Noise
      // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
      // Set the vertex
      vertex(x, y); 
      // Increment x dimension for noise
      xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}
// p5 Will handle requesting animation frames from the browser and wil run draw() each animation frrame.
function draw() {
  background(0);
  translate(width / 2,height / 2);   // center of screen
  fill(255);
  circle(100, -300, 20);
  makeWave();
  makeWave();
  makeWave();
  makeWave();
  noLoop();
}
