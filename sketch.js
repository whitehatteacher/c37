function preload() {
  ghost_running = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
  createCanvas(400,400);
  trex = createSprite(200,180,20,50);
  trex.addAnimation("running", ghost_running);
}

function draw(){
  background("black");
  
  
  drawSprites();
  
}