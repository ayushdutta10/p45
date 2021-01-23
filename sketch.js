var boyLeft, boyRight, boyStanding
var blackC, blueC, brownC, greenC, purpleCv2, purpleC, rainbowC, redC, whiteC, yellowC;


function preload(){
blackC = loadImage("crystals/black_crystals.jpg");
blueC = loadImage("crystals/blue_crystals.jpg");
brownC = loadImage("crystals/brown_crystals.jpg");
greenC = loadImage("crystals/green_crystal.jpg");
purpleCv2 = loadImage("crystals/purple_crystals_v2.jpg");
purpleC = loadImage("crystals/purple_crystals.jpg");
rainbowC = loadImage("crystals/rainbow_crystals.jpg");
redC = loadImage("crystals/red_crystals.jpg");
whiteC = loadImage("crystals/white_crystals.jpg");
yellowC = loadImage("crystals/yellow_crystals.jpg");

boyLeft = loadImage("boy animations/left_side.jpeg");
boyRight = loadImage("boy animations/right_side.jpeg");
boyStanding = loadImage("boy animations/standing.jpeg");
}

function setup(){
createCanvas(800,800);
m1 = createSprite(10,400,20,800);
m2 = createSprite(400,10,800,20);
m3 = createSprite(790,400,20,800);
m4 = createSprite(400,790,800,20);
m5 = createSprite(60,50,20,100);
m6 = createSprite(125,150,20,120)

}
function draw(){  
background("green");
drawSprites();

}


