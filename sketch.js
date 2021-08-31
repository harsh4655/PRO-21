//creating global variable for car , wall, weight , speed 
var bullet,speed,weight;
var wall,thickness;

function setup() {

  //creating canvas
  createCanvas(1600,400);

  //giving random number to speed and weight
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  //creating car
 bullet1=createSprite(50,50,60,20);
 
 //creating car1
  bullet2=createSprite(50,150,60,20);
  
  //creating car2
  bullet3=createSprite(50,250,60,20);

 
 // creating wall sprite
  wall = createSprite(1200,200,thickness,height/1)
  wall.shapeColor= color(80,80,80);
 
}
function draw() {

// color of canvas
  background(0,0,0);
  
 // seting velocity for each car
 bullet1.velocityX = 24
 bullet2.velocityX = 26
 bullet3.velocityX = 28
 
  if ( hasCollided(bullet1,wall)) {
bullet1.velocityX = 0;
var damage=0.5 * weight * speed *( speed/thickness *thickness * thickness);


if (damage>10)
{
  wall.shapeColor = color(225,0,0);
}

if(damage<10)

{

wall.shapeColor = color(0,225,0);

}
  }
 
  if ( hasCollided(bullet2,wall)) {
    bullet2.velocityX = 0;
    var damage=0.5 * weight * speed *( speed/thickness *thickness * thickness);
    
    
    if (damage>10)
    {
      wall.shapeColor = color(225,0,0);
    }
    
    if(damage<10)
    
    {
    
    wall.shapeColor = color(0,225,0);
    
    }
      }

      if ( hasCollided(bullet3,wall)) {
        bullet3.velocityX = 0;
        var damage=0.5 * weight * speed *( speed/thickness *thickness * thickness);
        
        
        if (damage>10)
        {
          wall.shapeColor = color(225,0,0);
        }
        
        if(damage<10)
        
        {
        
        wall.shapeColor = color(0,225,0);
        
        }
          }
    

//displaying all the objects
  drawSprites();
}

function hasCollided(bullet,wall)   
{
	bulletRightEdge = bullet.x + bullet.width;
	wallLeftEdge = wall.x;
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}

