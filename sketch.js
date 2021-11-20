var ship,shipImg;
var sea1,sea2, seaImg;

function preload(){

  shipImg = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png"); 
}

function setup(){

  createCanvas(400,400);
  background("blue");

  sea1=createSprite(625.2,200);
  sea1.addImage(seaImg);
  sea1.velocityX = -5;
  sea1.scale=0.3;

  sea2=createSprite(1872.6,200);
  sea2.addImage(seaImg);
  sea2.velocityX = -5;
  sea2.scale=0.3;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("moveShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  if(sea1.x < -620.2){
    sea1.x = 1872.6
  }

  if(sea2.x < -620.2){
    sea2.x = 1872.6
  }
 
  drawSprites();
}

//██░▀██████████████▀░██
//█▌▒▒░████████████░▒▒▐█
//█░▒▒▒░██████████░▒▒▒░█
//▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▐
//░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
//███▀▀▀██▄▒▒▒▒▒▒▒▄██▀▀▀██
//██░░░▐█░▀█▒▒▒▒▒█▀░█▌░░░█
//▐▌░░░▐▄▌░▐▌▒▒▒▐▌░▐▄▌░░▐▌
//█░░░▐█▌░░▌▒▒▒▐░░▐█▌░░█
//▒▀▄▄▄█▄▄▄▌░▄░▐▄▄▄█▄▄▀▒
//░░░░░░░░░░└┴┘░░░░░░░░░
//██▄▄░░░░░░░░░░░░░░▄▄██
//████████▒▒▒▒▒▒████████
//█▀░░███▒▒░░▒░░▒▀██████
//█▒░███▒▒╖░░╥░░╓▒▐█████
//█▒░▀▀▀░░║░░║░░║░░█████
//██▄▄▄▄▀▀┴┴╚╧╧╝╧╧╝┴┴███
//██████████████████████