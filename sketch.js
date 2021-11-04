var player, playerI;
var bg;
var floor, floorI;
var playerR, playerL;
var alien, alienR;
var alienL;
var shipI;
var msl, mslI;
var go, goI;
var sad, sad1, sad2, sad3;
var sound;
var boom, boomI;
var heart1, heartI , heart2, heart3;


function preload(){
    bg = loadImage("images/bg.png");
    floorI = loadImage("images/pagenta.png");
    playerI = loadImage("images/front.png");
    playerR = loadImage("images/right.png");
    playerL = loadImage("images/left.png");
    alienR = loadImage("images/genr.png");
    alienL = loadImage("images/genl.png");
    shipI = loadImage("images/ship.png");
    mslI = loadImage("images/msl.png");
    goI = loadImage("images/over.png");
    sad1 = loadImage("images/e1.png");
    sad2 = loadImage("images/e2.png");
    sad3 = loadImage("images/e3.png");
    boomI = loadAnimation("images/5.png","images/4.png","images/3.png","images/2.png","images/1.png");
    //sound = loadSound("sounds/boom.mp3");
    heartI = loadImage("images/life.png");
}


function setup(){
    createCanvas(1000,600);
    //sound.play();

    floor = createSprite(500,612,1000,2);
    floor.addImage(floorI)
    floor.scale = 2;

    player = createSprite(500,520,50,50);
    player.addImage(playerI)
    player.scale = 0.35;

    go = createSprite(500,300,20,20);
    go.addImage(goI);
    go.visible = false;

    heart1 = createSprite(30,40,20,20);
    heart1.addImage(heartI);
    heart1.scale = 0.1;
    heart2 = createSprite(80,40,20,20);
    heart2.addImage(heartI);
    heart2.scale = 0.1;
    heart3 = createSprite(130,40,20,20);
    heart3.addImage(heartI);
    heart3.scale = 0.1;

    //boom = createSprite(500,300,50,50);
    //boom.addAnimation("Explosion" ,boomI);
    //boom.scale = 0.3;

    enemyGroup = new Group()

}

function draw(){
    background(bg);

    if(keyDown("UP_ARROW")){
        msl = createSprite(player.x , player.y , 20 ,20);
        msl.scale = 0.3;
        msl.velocityY = -20;
        msl.addImage(mslI);
        //player.x = msl.x;
    }
    if(enemyGroup.isTouching(floor)){
        heart3.destroy();
    }

    enemy();
    //missile();
    //end();

    if(enemyGroup.isTouching(msl)){
        boom = createSprite(enemyGroup.x , enemyGroup.y , 50, 50);
        boom.addAnimation("Explosion",boomI);
        boom.scale = 0.3;
        enemyGroup.destroyEach();
        msl.destroy();
    }
    
    if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 5;
        player.addImage(playerR);
        player.scale = 0.43;
        //player.debug = true;
        //player.setCollider("rectangle",500,520,100,100);
       
    }
    if(keyDown("LEFT_ARROW")){
        player.x = player.x - 5;
        player.addImage(playerL);
        player.scale = 0.35;
    }
    if(keyDown("UP_ARROW")){
        player.addImage(playerI);
        player.scale = 0.35;
    }

    if(keyDown("DOWN_ARROW")){
        player.addImage(playerI);
        player.scale = 0.35;
    }

    drawSprites();
    //stroke("gold");
    //fill ("red");
    //textSize(18);
    //text ("DON'T LET ALIENS TOUCH YOU OR THIS",575,590);
    //text ("USE ARROW KEYS TO MOVE, UP ARROW TO SHOOT || DON'T LET ALIENS TOUCH YOU OR THIS",10,590);
}

function enemy(){
    if(frameCount % 120 === 0){
        var alien = createSprite(Math.round(random(100,900)),0,20,20);
        var rand = Math.round(random(1,3));
        switch (rand){
            case 1 : alien.addImage(alienR);
            alien.velocityY = 3; 
            alien.scale = 0.3;
            alien.lifetime = 200;
            break;

            case 2 : alien.addImage(alienL);
            alien.velocityY = 3; 
            alien.scale = 0.1;
            alien.lifetime = 200;
            break;

            case 3 : alien.addImage(shipI);
            alien.velocityY = 4;
            alien.scale = 0.4;
            alien.lifetime = 200;
            break;

            default:break;
        }
        //alien.velocityY = 3; 
        enemyGroup.add(alien);
    }
}
    /*function missile(){
        msl = createSprite(player.x , player.y , 20 ,20);
        msl.scale = 0.3;
        msl.velocityY = -20;
        msl.lifetime = 70;
        return msl;
    }*/

     /*function end(){
        if(enemyGroup.isTouching(floor)){
            go.visible = true;
            player.visible = false;
            if(frameCount % 30 === 0){

            var sad = createSprite(Math.round(random(900,100)),300,0,20);
            var sand = Math.round(random(4,6));
            switch(sand){
              case 4 : sad.addImage(sad1);
              sad.scale = 0.3;
              break;
              
              case 5 : sad.addImage(sad2);
              sad.scale = 0.1;
              break;

              case 6 : sad.addImage(sad3);
              sad.scale = 0.5;
              break;

            default:break;

            }
            sad.velocityX = 5;
            }
        }
    }*/
