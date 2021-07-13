var spaceBackground;
var issImage;
var spaceCraftImage;

function preload(){

spaceBackground = loadImage("images/spacebg.jpg");  
issImage = loadImage("images/iss.png");
spaceCraftImage1 = loadImage("images/spacecraft1.png");
spaceCraftImage2 = loadImage("images/spacecraft2.png");
spaceCraftImage3 = loadImage("images/spacecraft3.png");
spaceCraftImage4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  spaceCraft=createSprite(350,350,50,50);
  spaceCraft.addImage(spaceCraftImage1);
  spaceCraft.scale =0.2;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale=0.8;

}

function draw() {
  background(spaceBackground);  


  if(keyCode === UP_ARROW){
   spaceCraft.y = spaceCraft.y-1;
   spaceCraft.addImage(spaceCraftImage2);
 }

 if(keyCode === DOWN_ARROW){
  spaceCraft.addImage(spaceCraftImage2);
  
  textSize(20);
  fill("white");
  text("Docking Sucessfull!",350,375);
}

if(keyCode === RIGHT_ARROW){
  spaceCraft.x = spaceCraft.x+1;
  spaceCraft.addImage(spaceCraftImage4);
 }

if(keyCode === LEFT_ARROW){
  spaceCraft.x = spaceCraft.x-1;
  spaceCraft.addImage(spaceCraftImage3)
 }

 


  drawSprites();
}