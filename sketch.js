const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var backgroundImg, engine, world

function preload(){
  backgroundImg = loadImage("space.png")
}

function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  meteor = new Meteor(100,100,50,50)
  gravity = new Gravity(meteor.body,{x:200,y:100})
  land = new Earth(1100,350)
  water1 = new Earth(1150,350)
  water2 = new Earth(1050,350)
  water3 = new Earth(1100,375)
  water4 = new Earth(1150,375)
  water5 = new Earth(1050,375)
  water6 = new Earth(1100,325)
  water7 = new Earth(1150,325)
  water8 = new Earth(1050,325)
  ground = new Ground(600,height,1200,20);

}

function draw() {
  background(backgroundImg);  
  //drawSprites();

  meteor.display()
  gravity.display()
  ground.display()
  land.display()
  water1.display()
  water2.display()
  water3.display()
  water4.display()
  water5.display()
  water6.display()
  water7.display()
  water8.display()
}

function mouseDragged(){
  Matter.Body.setPosition(meteor.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  gravity.fly();
}