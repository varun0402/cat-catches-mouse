var g
var cat,cat1png,cat2png,cat3png
var mouse,mouse1png,mouse2png,mousepng
function preload() {
    //load the images here

    g = loadImage("images/garden.png");
    cat1png= loadAnimation("images/cat1.png");
    cat2png=loadAnimation("images/cat2.png","images/Cat3.png");
    cat3png=loadAnimation("images/cat4.png");
    mouse1png=loadAnimation("images/mouse1.png");
    mouse2png= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3png=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(870, 600);
    cat.addAnimation("tomSleeping", cat1png);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("jerryStanding", mouse1png);
    mouse.scale = 0.15;
}

function draw() {

    background(g);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", cat3png);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage",mouse3png);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("tomRunning", cat2png);
    cat.changeAnimation("tomRunning");
    
    mouse.addAnimation("jerryTeasing", mouse2png);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing");
}
}



