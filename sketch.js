var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,800);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColour=color(255);
wall=createSprite(1500,200,thickness,height/2)
wall.shapeColour=color(80,80,80)
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=10;
      var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
       if(deformation>10) {  wall.shapeColor=color(255,0,0); 
      }
       if(deformation<10) {
          wall.shapeColor=color(230,230,0);
         } 
           }
  drawSprites();
}
function hasCollided(lbullet, lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x; 
    if (bulletRightEdge>=wallLeftEdge) {
       return true 
      } return false; }