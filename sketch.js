
var monkey , monkey_running
var banana ,bananaImage,obstacle,obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(800,400)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,400,400,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  
  background(255);
  
  if (ground.x<0) {    
    ground.x=ground.width/2;
    
  }
  
  if (keyDown("space"))  {
    
    monkey.velocityY=-12;
    
    
  }  
  
 monkey.velocityY=monkey.velocityY + 0.8 ;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score ,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime ,100,50);
  
  
  if (obstacleGroup.isTouching(monkey)) {
    ground.velocityX = 0;
      monkey.velocityY = 0;
      
     
      
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0); 
    
    obstacleGroup.setVisiblityEach=false
    bananaGroup.setVisiblityEach=false
    
    survivalTime=0
    
  }
  
  
  monkey.collide(ground);
  
  
  
  
  
  spawnObstacles();
  
  spawnBanana ();

  drawSprites();
}



function spawnBanana () {
  
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(300,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 400;
    

    
    
    
    bananaGroup.add(banana);
  }
  
  
}





function spawnObstacles()   {
  
   if (frameCount % 80 === 0) {
    var obstacle= createSprite(300,370,10,40);    
    obstacle.addImage(obstacleImage);
     obstacle.velocityX=-4
    obstacle.scale = 0.1;             
    obstacle.lifetime = 400;
     
    
  
              
    obstacleGroup.add(obstacle);
  }
  
  
  
  
  
  
}


















