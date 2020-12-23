const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var boy;
var tree;
var stone;
var inVisible;
var chain;

function preload(){
	bg = loadImage("background.jfif");
}

function setup() {
	createCanvas(windowWidth,windowHeight-4);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height/2+300,width,60);
	boy = new Boy(width/2-300,height/2+160,200,270);
	tree = new Tree(width/2+width/4,height/2-30,500,600);
	stone = new Stone(mouseX,mouseY,40,40);
	inVisible = new Ground(width/2-380,height/2+130,10,10);
	chain = new Constraint.create(options);
	World.add(word, chain);
}


function draw() {
  Engine.update(engine);
  
  background(bg);
  ground.display();
  boy.display();
  tree.display();
  inVisible.display();
  stone.display();
}