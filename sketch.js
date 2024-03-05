function setup() {
  createCanvas(innerWidth, innerHeight,WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  rotateX(60);
  noFill();
  stroke(255);
  strokeWeight(2);
        

  for(let i=0;i<20;i++)   
  {

    var r = map(sin(frameCount/2),-1,1,100,200);
    var g = map(i,0,20,100,200);
    var b = map(cos(frameCount),-1,1,200,100);

    stroke(r,g,b);

    // rotateX(frameCount/10);

    beginShape();
    for(let j = 0;j<360;j++)   //control speed with j and form great pattern //j+90 will give rectangel
    {
      let rad = i*16;             //this is radius
      let x = rad * cos(j);
      let y = rad * sin(j);       
      // let z = sin(frameCount*2+i*5) * 50;   //normal sin wave
      let z = sin(frameCount*5+i*30) * 50;   //change 30 to get unique pattern  like water droplet
      // let z = sin(frameCount*5+exp(i)*30) * 50;   //illusion create
      // let z = sin(frameCount*5+i*j) * 50;   //wave rotating
      // let z = sin(frameCount*5+i*30-j*20) * 50;   //spiral 

      vertex(x,y,z);
    }
    endShape(CLOSE);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}