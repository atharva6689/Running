var path;
var pathImg;
var jaxon,running;
var jaxonImg;
var powerUps;

function preload(){
  //pre-load images
  jaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
  powerUps = loadImage("bomb.png","coin.png","energyDrink.png","power.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(1350,700);
  //create sprites here
   

   path = createSprite(700,400,20,600);
   path.addImage("path",pathImg);
   path.velocityY = 4;
   path.scale = 1.2;

   jaxon = createSprite(700,600,1,6);
   jaxon.addAnimation("walking",jaxonImg);
   jaxon.scale = 0.1;

   invisibleGround = createSprite(500,400,20,600);  
   invisibleGround.visible = false;

   invisibleGround1 = createSprite(900,400,20,600);  
   invisibleGround1.visible = false;
}


function draw() {
  background(0);

  if (keyDown("left") && jaxon.x >= 130) {
    jaxon.velocityX = -10;
}

if (keyDown("right") && jaxon.x >= 130) {
  jaxon.velocityX = 10;
}

  if (path.y > 330.055 ){
    path.y = height/4;
 }


   jaxon.collide(invisibleGround);
   jaxon.collide(invisibleGround1);

  drawSprites();
}
