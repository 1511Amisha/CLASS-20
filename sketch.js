var fixedRect,movingRect


function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400,400,50,50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(500,400,50,50);
  movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 ){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}

else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
  drawSprites();
}