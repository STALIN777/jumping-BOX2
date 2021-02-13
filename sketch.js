var music;
var player;
var surface1 , surface2 , surface3 , surface4;
var edges;
var rand;


 
function preload(){
    music = loadSound("music.mp3");
}
 
 
function setup(){
    canvas = createCanvas(700,600);
    
   
 
    surface1 = createSprite(80,580,150,20);
    surface2 = createSprite(255,580,150,20);
    surface3 = createSprite(435,580,150,20);
    surface4 = createSprite(610,580,150,20);
    player = createSprite(rand,300,30,30);
    
   
    player.velocityX=-4;
    player.velocityY=4;



    surface1.shapeColor="blue";
    surface2.shapeColor="pink";
    surface3.shapeColor="green";
    surface4.shapeColor="red";
    player.shapeColor="white";




}

function draw()
{
    background("grey");
    edges = createEdgeSprites();
    rand = Math.round(random(50,500))
    
    

    if(objects(surface2 , player))
    {
      player.shapeColor="pink";
      player.bounceOff(surface2);
      music.play();

      
    }
    
    
    if(objects(surface1 , player))
    {
      player.shapeColor = "blue";
      player.bounceOff(surface1)
    }
    
    if(objects(surface3 , player))
    {
      player.shapeColor = "green";
      player.bounceOff(surface3)
      music.stop();
      player.velocityX=0;
      player.velocityY=0;
    }
   
    if(objects(surface4 , player))
    {
      player.shapeColor = "red";
      player.bounceOff(surface4)
    }

    player.bounceOff(edges);


    
    drawSprites();

}

function objects (object1 , object2)
{
  if (object1.x - object2.x <= object1.width/2 + object2.width/2 &&
      object2.x - object1.x <= object1.width/2 + object2.width/2 &&
      object1.y - object2.y <= object1.height/2 + object2.height/2 &&
      object2.y - object1.y <= object1.height/2 + object2.height/2
     )
   
  {
      return true;
  }
}

