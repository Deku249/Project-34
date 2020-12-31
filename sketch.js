const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,800);

  engine = Engine.create;
  world = engine.world;

  bob1 = new Bob (400,400,50,50)

}

function draw() {
  background(220); 
  Engine.update(engine);
  
  bob1.display();

  drawSprites();
}

