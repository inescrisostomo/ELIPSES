a=0; 
diametro=10
numeroCirculos=10;
espaco=50;
diametros = [];


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(0);
  for (let i = 0; i < 360; i++) {
  diametros[i]=sin(i/360)*360;
  }


}

function draw() {
  
  background("rgba(0,0,0,0.1)"); 
  a++;
  fill("rgba(0, 0, 0, 0)");

  stroke("rgba(250, 250, 250, 1)");

for (let i = 0; i < numeroCirculos; i++) {
  ellipse(windowWidth/2,windowHeight/2, diametros[a*3%360]+i*espaco,  diametros[a%360]+i*espaco);
}
   
} 