
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof;






function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,100,300,20);
	ball1 = new Ball(100,400,50,50);
	ball2 = new Ball(150,400,50,50);
	ball3 = new Ball(200,400,50,50);
	ball4 = new Ball(250,400,50,50);
	ball5 = new Ball(300,400,50,50);

	rope1 = new Rope(roof.body,ball1.body);
	rope2 = new Rope(roof.body,ball2.body);
	rope3 = new Rope(roof.body,ball3.body);
	rope4 = new Rope(roof.body,ball4.body);
	rope5 = new Rope(roof.body,ball5.body);
	

	Engine.run(engine);

	
  
}


function draw() {
  
  background("blue");
  
  

  roof.display();
  ball1.display();
  rope1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}



