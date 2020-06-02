var bullet, spped, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(400, 200, 50,20);
 bullet.velocityX = random(-4,-8);
 bullet.shapeColor = color("white");
 wall =  createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80);

 speed = random(223,221);
 thickness = random(22, 83);
 weight = random(30,52);
 damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(255,255,255);  
  if(bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2){
       console.log(damage);
    if(damage < 10){
      bullet.shapeColor = color("green");
    }
    else{
      bullet.shapeColor = color("red");
    }
    }
    drawSprites();
}