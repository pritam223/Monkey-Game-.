
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(500, 400);
  
 
  monkey = createSprite (80 , 315 , 20 , 20) ;
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  
  ground = createSprite (100,315,9999,10) ;
  ground.velocityX = -4 ;
  ground.x = ground.width/2 ;
  
  FoodGroup = new Group () ;
  ObstaclesGroup = new Group () ;
  score = 0 ;
}

function draw() {
  background(220);
  
  var survivalTime = 0 ;
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score , 500,50)
  
  stroke("black")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("survival Time" + survivalTime , 100,70)
  
  
  
  if(ground.x < 0 ) {
    ground.x = ground.width/2 ;
  }
  
  if (keyDown("space")) {
    monkey.velocityY = -10 ;
    }
  
  if(ObstaclesGroup.isTouching(monkey)) {
    ground.velocityX = 0 ;
    monkey.velocityY = 0 ;
    Obstacle.setVelocityXEach(0) ;
    Food.setVelocityXEach(0) ;
    ObstaclesGroup.setLifetimeEach(-1) ;
    FoodGroup.setLifetimeEach(-1) ;
  }
    
  monkey.velocityY = monkey.velocityY+0.8 ;
  monkey.collide (ground) ;
   
  ObstaclesGroup.collide(ground) ;
  spawnFood() ;
  spawnObstacle() ;
  
  drawSprites() ;
  

  

}

function spawnObstacle() {
  if(frameCount%100 === 0 ) {
    Obstacle = createSprite(800,290,10,40) ;
    Obstacle.addImage(obstacleImage)
    Obstacle.scale = 0.2 ;
    Obstacle.velocityX = -6 ;
    Obstacle.lifetime = 300 ;
    
  }
  
}

function spawnFood() {
  if(frameCount%80=== 0) {
    Food = createSprite(700,160 ,10,40)
    Food.addImage(bananaImage)
    Food.scale = 0.1 ;
    Food.velocityX = -5 ;
    Food.lifetime = 300 ;    
  }
  
}
