var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(13,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,255);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(255,255,255);

  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor = color(0,255,0)
    }
  }
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}