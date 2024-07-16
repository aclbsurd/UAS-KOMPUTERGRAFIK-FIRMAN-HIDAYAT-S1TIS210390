let gantiWarna = false;

function setup() {
  createCanvas(800, 800, WEBGL);

  describe('A white cylinder on a gray background.');
}

function draw() {
  background(220);
  orbitControl();

  if (gantiWarna === true) {
    let colors = color("red");
    ambientLight(colors);
  
}
  cylinder(200, 250, 50, 2);
}

function doubleClicked(){
  gantiWarna = true;
}