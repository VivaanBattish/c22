const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var options;
var ball,ballop;

function setup() {
  createCanvas(400,400);

 ballop = {
   restitution: 1
 }

options = {
  isStatic: true
}
 
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(200,200,30,ballop);
 World.add(world,ball);

 console.log(ball);  

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);


  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}

