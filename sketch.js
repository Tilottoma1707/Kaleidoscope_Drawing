let symmetry = 6;
let angle = 360/symmetry;
let clearButton;
let slider;
let xoff = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
    background(0);
  
  clearbutton = createButton("CLEAR");
  clearbutton.mousePressed(clearDesign)
 slider = createSlider(1,32,4,0.1);
 colorMode(HSB,255,255,255)

}

function clearDesign(){
background(0);
}

function draw() {
  translate(width/2,height/2)
    
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
 
  if(mouseIsPressed){
    let hu = noise(xoff) * 255
      xoff += 0.01;
      stroke(hu, 255,255,100);
  for(let i = 0; i < symmetry; i++){
    
    rotate(angle);  
  //let d = dist(mx,my,pmx,pmy)
  let sw = slider.value();
  strokeWeight(sw);
    line(mx,my,pmx,pmy)
         push();
    scale(1,-1)
    line(mx,my,pmx,pmy)
     pop();

  }  
  } 
    
}
}