var garden,rabbit;
var gardenImg,rabbitImg;
var grass, grassImg;
var appleImg;
var leafImg;
var orangeLeafImg;
var redImageImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg = loadImage("grass.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImageImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


grass = createSprite(200,270,400,100);
grass.addImage(grassImg);
grass.scale=0.10
grass.velocityX=3;
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  grass.bounceOff(edges);
 
  rabbit.x = mouseX;




var select_sprites = Math.round(random(1,4));
if(frameCount % 80==0){
  
  if(select_sprites==1){
    createApples();
  }
  
  else if (select_sprites==2) {
    createLeaves();
    
  }
  else if (select_sprites==3) {
    createorangeLeaves();}

   else {
    createredLeaves();
    
  }
}


  drawSprites();
}
function createApples(){
   apples = createSprite(random(50,340),40,10,10);
   apples.addImage(appleImg);
   apples.scale=0.07;
   apples.velocityY=3;
   apples.depth = rabbit.depth;
   rabbit.depth = rabbit.depth+1;
   apples.lifetime=-1;
}
function createLeaves(){
  leaves = createSprite(random(20,360),40,10,10);
  leaves.addImage(leafImg);
  leaves.scale=0.07;
  leaves.velocityY=3;
  leaves.depth = rabbit.depth;
   rabbit.depth = rabbit.depth+1;
  leaves.lifetime=-1;
}
function createorangeLeaves(){
 orangeLeaves = createSprite(random(30,370),40,10,10);
 orangeLeaves.addImage(orangeLeafImg);
 orangeLeaves.scale=0.07;
 orangeLeaves.velocityY=3;
 orangeLeaves.depth = rabbit.depth;
   rabbit.depth = rabbit.depth+1;
 orangeLeaves.lifetime=-1;
}
function createredLeaves(){
  redLeaves = createSprite(random(30,370),40,10,10);
  redLeaves.addImage(redImageImg);
  redLeaves.scale=0.07;
 redLeaves.velocityY=3;
  redLeaves.depth = rabbit.depth;
    red.depth = rabbit.depth+1;
  redLeaves.lifetime=-1;
 }
 





 
 