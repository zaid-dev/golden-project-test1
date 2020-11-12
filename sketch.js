var sprite1;
var player;
var playerRun;
var blocks;
var backgroundImage;
var playerJumpImage;
var array_blocks = [];

function preload(){
playerRun = loadAnimation(
"run/run1.png",
"run/run2.png",
"run/run3.png",
"run/run4.png",
"run/run5.png",
"run/run6.png");

playerJumpImage = loadAnimation(
  "jump/jump 1.png",
  "jump/jump 2.png",
  "jump/jump 3.png",
  "jump/jump 4.png",
  "jump/jump 5.png",
  "jump/jump 6.png",
  "jump/jump 7.png",
  "jump/jump 8.png");

backgroundImage = loadImage("background.jpg");
}

function setup() {
  createCanvas(1200,800);

  player = createSprite(200,200,20,20);

  player.addAnimation("police run",playerRun);


  player.scale = 0.1;

  for(var i = 0; i < 1200; i=i+100){   
    blocks = createSprite(i,random(200,600),60,20);
  }



  player.debug = true;
  blocks.debug = true;

}

function draw() {
  background(backgroundImage);

  player.collide(blocks);

  playerMove();
 
  drawSprites();
}


function playerMove(){
  if(keyDown(RIGHT_ARROW)){
    player.x += 20;
  }
  if(keyDown(LEFT_ARROW)){
    player.x += -20;
  }
 
  if(keyDown(UP_ARROW)){
    player.y += -20;
  }
 
  if(keyDown(DOWN_ARROW)){
    player.y += +20;
  }

  if(keyWentDown("SPACE")){
    player.changeAnimation("police run",playerJumpImage);
    console.log("hi ");
  }

  if(keyWentUp("SPACE")){
    player.changeAnimation("police run",playerRun);
  }
}