const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DarkBeast

function preload(){}

function setup() {
    createCanvas(1000,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    DarkBeast = createSprite(100,335,50,80);
    DarkBeast.shapeColor="red";

    ground = new Ground(500,385,1100,20);

	Engine.run(engine);
  
}

function draw() {
    background(0);
    rectMode(CENTER);

  ground.display();

  drawSprites();
}



