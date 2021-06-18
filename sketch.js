
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fan;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var fan_options ={
    isStatic: true
  };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  fan = Bodies.rectangle(100,200,100,20,fan_options);
  World.add(world,fan);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(fan,angle);
  push();
  translate(fan.position.x,fan.position.y);
  rotate(angle);
 rect (0,0,100,20);
  pop();
  angle+=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

