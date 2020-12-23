
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    //creating Box
	bottom=createSprite(600,650,200,20);
	bottom.shapeColor="white";
	left=createSprite(500,610,20,100);
	left.shapeColor="white";
	right=createSprite(700,610,20,100);
	right.shapeColor="white";

	//creating Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=Bodies.circle(200,100,50,paper_options);


	Engine.run(engine);
  //Adding to world
  World.add(world,paper);

}


function draw() {

  Engine.update(engine);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
 
}



