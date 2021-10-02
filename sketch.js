var rectangle, rectangle_move;

function setup() {
  createCanvas(1280,900);
  rectangle_move = createSprite(100, 750, 50, 30);
  rectangle = createSprite(640, 450, 80, 40);

  rectangle_move.shapeColor = "blue";
  rectangle.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rectangle_move.x = mouseX;
  rectangle_move.y = mouseY;
  if (rectangle_move.x - rectangle.x < rectangle.width/2 + rectangle_move.width/2 
    && rectangle.y - rectangle_move.y < rectangle.width/2 + rectangle_move.width/2 
    && rectangle_move.x - rectangle.x < rectangle.width/2 + rectangle_move.width/2 
    && rectangle.y - rectangle_move.y < rectangle.height/2 + rectangle_move.height/2) {
    rectangle.shapeColor = "red";
  }
  else {
    rectangle.shapeColor = "yellow";
  }
}