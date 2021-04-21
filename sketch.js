var backImage,backgr;
var player, player_running;
var ground,ground_img;
var enemyImage;
var score,survivalTime;
var gameOver,gameOverImage;
var disk,diskImage;
var disk;
var enemy,enemysGroup,Enemys,enemys;
var restart,restartImage;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("backgr.jpeg");
  player_running = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  enemyImage=loadImage("enemy.png");
  gameOverImage=loadImage("gameover.png");
  restartImage=loadImage("restart.png");
  enemysGroup=new Group();
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.1;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  gameOver = createSprite(400,140,20,50);
  gameOver.addImage(gameOverImage);
  gameOver.scale=0.5;

  restart= createSprite(400,140,20,50);
  restart.addImage(restartImage);
  restart.scale=0.5;

  diskGroup=new Group();
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
gameOver.visible=false;
restart.visible=false;

  if(backgr.x<100){
    backgr.x=backgr.width/2;

  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }

    if(enemysGroup.isTouching(player)){
    player.visible=false;
    enemysGroup.setVelocityXEach(0);
    enemysGroup.setLifetimeEach(-1);
    backgr.velocityX=0;
    gameOver.visible=true;
    restart.visible=true;
    }

    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    
  
    var score=0;

  }

spawnEnemys();
  
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,350,50);

  stroke("white");
   textSize(20);
   stroke("white");
   textSize(20);
   fill("white");
   
}

function spawnEnemys(){
  if (frameCount % 100 === 0){
    var enemy = createSprite(900,320,10,40);
    enemy.velocityX = -7;
    enemy.addImage(enemyImage);
     enemy.scale = 1.5;
     enemy.lifetime = 300;
     enemysGroup.add(enemy);
  }
}