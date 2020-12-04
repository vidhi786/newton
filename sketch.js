var bo1,bo2,bo,bo4,bo5;
var r1,r2,r3,r4,r5;
var roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,350,400,30);
bo1=new Bob(320,450,30,);
bo2=new Bob(360,450,30,);
bo3=new Bob(400,450,30,);
bo4=new Bob(460,450,30,);
bo5=new Bob(520,450,30,);


r1=new Rope(roof.body,bo1.body,-120,0);
r2=new Rope(roof.body,bo2.body,-60,0);
r3=new Rope(roof.body,bo3.body,0,0);
r4=new Rope(roof.body,bo4.body,60,0);
r5=new Rope(roof.body,bo5.body,120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
 roof.display();
 bo1.display();
 
 
 bo4.display();
 bo5.display();
 bo3.display();
 bo2.display();
 r3.display();
r2.display();
r1.display();
r4.display();
r5.display();
}



