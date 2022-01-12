var Caixa;
function setup() {
  createCanvas(400,400);
  
  Caixa=createSprite(200,200,20,20);
  


  
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
  Caixa.position.x+=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    Caixa.position.x-=5;

  }
  if(keyIsDown(UP_ARROW)){
    Caixa.position.y-=5;

  }
  if(keyIsDown(DOWN_ARROW)){
    Caixa.position.y+=5;

  }





  background(30);
  drawSprites();


}




