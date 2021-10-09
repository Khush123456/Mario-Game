var PLAY = 1;
var END = 0;
var gameState = PLAY;
var mashgrpup,pipgroup,flowergroup,coingroup
var mario,mariogif;
var score=0
function preload(){
  mariogif=loadImage("Mario gif.gif")
  backgroundImg=loadImage("bg.png")
  groundImg=loadImage("ground2.png")
  pipeImg=loadImage("Obstacle 1(green).png")
  coinImg=loadImage("imageedit_1_3472761619.png")
  flowersImg=loadImage("imageedit_4_8866026571.png")
  mushroomsImg=loadImage("imageedit_5_3424578630.png")
  gameoverimg=loadImage("mariodead.jpg")
}
function setup(){
  createCanvas(550,400);
 
  bg=createSprite(300,190,450,100)
  bg.addImage("bg",backgroundImg)
  bg.scale=1
  ground=createSprite(175,350,450,100)
  ground.addImage("ground",groundImg)
  ground.scale=1
   mario=createSprite(50,270,30,60)
  mario.addImage("mario",mariogif)
  mario.scale=0.5
  
  
  mashgroup=new Group()
  coingroup=new Group()
  flowergroup=new Group()
  pipgroup=new Group()
  mario.setCollider("circle",0,0,70)
  
  
}
function draw(){
  background("black")
  
  if(gameState===PLAY)
    {
      
    
  bg.velocityX=-4
  if(bg.x<300){
    bg.x=bg.width/2
  }
  ground.velocityX=-3
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space"))
    {
      mario.velocityY=-15
    }
      mario.velocityY=mario.velocityY+0.8
      if(mario.isTouching(coingroup))
        {
          score=score+1
        coingroup.destroyEach()
        }
      if(mario.isTouching(pipgroup)||mario.isTouching(flowergroup)||mario.isTouching(mashgroup))
        {
          gameState=END
          mario.destroy()
          bg.destroy()
          ground.destroy()
          
          
          pipgroup.destroyEach()
          mashgroup.destroyEach()
          flowergroup.destroyEach()
          coingroup.destroyEach()
          
        }
      var rand=Math.round(random(1,3))
      if(rand===1){
            pipes()
          }
      else if(rand===2){
        mushrooms()
        
      }
      else if(rand===3){
        flowers()
      }
      
   coins()

    }
  else if(gameState===END)
    {     
      gameover= createSprite(300,200,100,100)
      gameover.addImage("over",gameoverimg)
      gameover.scale=0.4
      
    }
    mario.collide(ground)
    drawSprites()
  fill("black")
  textSize(15)
  stroke("black")
  text("score: "+score,400,40)
  
  
  
}
function pipes(){
  if(frameCount%60===0){
    greeno=createSprite(550,265,50,50)
    greeno.velocityX=-10
    greeno.setCollider("rectangle",0,0,50,50)
    greeno.addImage("o1",pipeImg)
    greeno.lifetime=125;
    greeno.scale=0.6
    pipgroup.add(greeno)
    
  }
}
function mushrooms(){
   if(frameCount%60===0){
    browno=createSprite(700,285,50,50)
    browno.velocityX=-10
    browno.addImage("o2",mushroomsImg)
    browno.lifetime=125;
    browno.scale=0.3
     mashgroup.add(browno)
    
  }
}
function flowers(){
  if(frameCount%60===0){
    yellowo=createSprite(500,285,50,50)
    yellowo.velocityX=-10
    yellowo.addImage("o3",flowersImg)
    yellowo.lifetime=125;
    yellowo.scale=0.3
    flowergroup.add(yellowo)
}}


function coins(){
  if(frameCount%60===0){
    goldo=createSprite(650,145,50,50)
    goldo.velocityX=-10
    goldo.addImage("o5",coinImg)
    goldo.lifetime=125;
    goldo.scale=0.2
    coingroup.add(goldo)
}
}

