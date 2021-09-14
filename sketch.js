var num = 60; // Array size
var mx = []; // Array to store x-coordinates of mouse cursor on your browser window.
var my = []; // Array to store y-coordinates of mouse cursor on your browser window.

function setup() {
  createCanvas(windowHeight, windowHeight);
  noStroke();
  fill('rgba(0,0,0, 0.5)');
  noCursor();
}

function draw() {
  background(255);

  var array_pos = (frameCount) % num; // The modulo (%) operator gives array_pos a value of 0-59. 
  mx[array_pos] = mouseX;             // With the current mouse position being storing in an array at every frame,
  my[array_pos] = mouseY;             // the array is filled again from the beginning once full using the % operator.
                                      // This is more efficient than using a for-loop.

  for (var i = 0; i < num; i++) {           // Where array_pos + 1 is the oldest and smallest circle in the array and 
    var index = (array_pos + 1 + i) % num;  // the diameter of the circle solely dependent on i, circle with index 
    ellipse(mx[index], my[index], i, i);    // array_pos + 1 is drawn with a radius of i=0. 
  }                                         // Following circles are larger as i increases.

}

