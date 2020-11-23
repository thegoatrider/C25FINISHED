var box1,box2,box3,boximg,block;
var ground,paper,paperImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
paperImg = loadImage("paper.png");	
boximg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 660);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Dustbin(900,640,200,20);
	box2 = new Dustbin(800,590,20,100);
	box3 = new Dustbin(1000,590,20,100);
	paper = new Paper(200,200,20);
	//paper.bounceOff(ground);
	ground = new Ground(600,660,1200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(117,114,114);
paper.display(); 
  box1.display(); 
  box3.display();
  box2.display();
  ground.display();
  image(boximg, 780,540, 280, 150);
  drawSprites();
 
}

function keyPressed(){
       if(keyCode === UP_ARROW){
		   Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
	   }
}


