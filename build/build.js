var iterationCount = 100;
var yoff = 0.0;
var xoff = -12;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    stroke(255);
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function makeWave() {
    beginShape();
    for (var x = -1200; x <= width; x += 5) {
        var y = map(noise(xoff, yoff), 0, .75, 300, 1);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    fill(255);
    circle(100, -300, 20);
    makeWave();
    makeWave();
    makeWave();
    makeWave();
    noLoop();
}
//# sourceMappingURL=build.js.map