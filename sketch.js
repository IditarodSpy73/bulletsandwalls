var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, thickness, height/2);
  

  wall.shapeColor = color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if (bullet.isTouching(wall)) {
      bullet.velocityX = 0;
      var deformation = (0.5 * weight*speed*speed)/(thickness * thickness * thickness);

      if (deformation>10) {
        wall.shapeColor = color(255,0,0);
      } else {   
        wall.shapeColor = color(0,255,0);    
      }

      console.log(deformation);
  }

  drawSprites();
}