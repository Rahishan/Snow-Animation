const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bg1,bg2,bg3,scene
var snow1,snow2,snow 
var boy1
var footstep1
var maxDrops=100
var snow=[]
var engine, world;

function preload() {
  bg1=loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")
  snow1=loadImage("snow4.webp")
  snow2=loadImage("snow5.webp")
  boy1=loadImage("boy.png")
  //song=loadSound("Winter-Forest-Sounds.wav")

}

function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(1366,625);
  if(frameCount % 60 === 0){

    for(var i=0; i<maxDrops; i++){
        snow.push(new Snow(random(0,1366), random(0,625)));
    }
  }
 
}

function draw() {

 background(0);
 Engine.update(engine);
  image(bg3,0,0,1366,625)
  image(boy1,500,300,300,300)

  
  
  
 
//song.play()


   getTime()
   for(var i = 0; i<maxDrops; i++){
    snow[i].showDrop();
    snow[i].updateY()
    
}
   
  drawSprites();
}

async function getTime(){ 

  var response  =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  
  hour = datetime.slice(11,13);
  min = datetime.slice(14,16)

}