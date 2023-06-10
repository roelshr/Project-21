
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
  	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	}



	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1050, 600, 20, 120);
	rightSide = new Ground(1150, 600, 20, 120);

  

	//Create the Bodies Here.
	Matter.Bodies.circle(200, 650, 50, ball_options)
	World.add(world, ball);

	Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {

  background(0);
  groundObj.display();
  leftSide.display()
  rightSide.display()
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:-0.05})
  }
}



