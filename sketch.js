const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,380,800,12)
box1=new Box(200,300,50,50)
box2=new Box(240,100,50,100)
   console.log(ground);
   
}  

function draw() {
  background(255,0,0);  
  Engine.update(engine);
 ground.display();
 box1.display()
 box2.display()
}








































