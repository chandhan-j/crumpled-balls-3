var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var ground,paper;
var box1,box2,box3;
var rope;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,height,1300,30);

	paper = new Paper(600,450,40)
	
	box1=new Dustbin(800,600,200,20);
	box2=new Dustbin(710,560,20,100);
	box3=new Dustbin(890,560,20,100);

	rope = new Rope(paper.body,{x:600,y:300});
	
}

function draw() {

	Engine.update(engine);
	background("DeepSkyBlue");
	
	ground.display();
	paper.display();
	
	rope.display();

	box1.display();
	box2.display();
	box3.display();

	textSize(30);
	text ("Let's Keep Our City Clean", 475,75)

	fill("BLACK");
	strokeWeight(5)
	textSize(20);
	text ("TRASHBIN", 745,400)

  	drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
	
}


function mouseReleased(){
	rope.fly();
}