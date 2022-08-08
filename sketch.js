var barco, barco2;
var fundo;

function preload(){
barco2 = loadAnimation("ship-3.png","ship-4.png")
fundo2 = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  fundo = createSprite(800,200,300,900);
  fundo.addImage(fundo2);
  fundo.scale=0.4;
  fundo.velocityX=-4;

  var barco = createSprite(200,220,100,100);
  barco.addAnimation("movimento",barco2);
  barco.scale=0.2;
  
}

function draw() {
  background(180);

  if(fundo.x < -400){
    fundo.x = 800;
    
  }

    drawSprites();

 
}
