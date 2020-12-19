
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(400, 650, 1200, 10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(400, 650, 1200, 10 , {isStatic:true} );
	World.add(world, ground);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  

	//var ball_options ={
	//	isStatic:false,
	//	restitution:0.3,
	//	friction:0.5,
	//	density:1.2
		
  //}
	
  // ball = Bodies.circle(50,500,20, ball_options);
  // World.add(world,ball);
	
	paper1 = new Paper(50,500,40);
	log1    = new  Log(600,620,250,20);
	log2    = new  Log(715,560,20,100);
	log3    = new  Log(485,560,20,100);

}


function draw() {
  background(0);
 drawSprites();
 Engine.update(engine);
 //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);

	paper1.display();
	log1.display();
	log2.display();
	log3.display();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	  // Matter.Body.applyForce(ball,50,{x:60,y:-65});
	 // Matter.Body.applyForce(paper1,70,{x:65,y:-65});
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
	 };
   };