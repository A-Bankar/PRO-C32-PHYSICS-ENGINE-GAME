const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gamestate;
var wait;
var play
var end;


var userEngine, userWorld;

var ground1;
var ground2;
var ground3;
var ground4;

var dboard,dboardImg;

var gamestate, wait, play, end;

var packages;

var gate;

var loss = 00;

function preload(){
}

function setup() {
  createCanvas(800, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  packages = [];

  ground1 = new Ground(400, 10, 800, 20);
  ground2 = new Ground(160, 790, 300, 20);
  ground3 = new Ground(1, 400, 20, 800);
  ground4 = new Ground(799, 400, 20, 800);
  ground5 = new Ground(640, 790, 300, 20);

  dboard = new Player(30, 700, 250, 30);

  Engine.run(userEngine);
}

function draw() {
  background("black");

  strokeWeight(3);
  stroke(12);
  textSize(50);
  fill(69,69,420);
  text("Loss: " + loss, 30, 100);
  text("use arrow keys to move the board.",30,150);
  text("use the board to block the balls",30,200)
  text("if 10 balls go in or the board goes in",30,250);
  text("then game over.",30,290)


  if (frameCount % 70 === 0) {
    packages.push(new Package(random(400, 400), 10, 10,10,10));
  }

  for (var o = 0; o < packages.length; o++) {
    packages[o].display();

    if (
      packages[o].body.position.y > 800 &&
      packages[o].body.position.y < 830
    ) {
      Matter.World.remove(userWorld, packages[o]);
      loss++;
    }
  }

  if (loss >= 10 || dboard.body.position.y > 800) {
    Matter.Body.setStatic(dboard.body,true);
    background(255)
    textSize(100)
    fill(0);
    strokeWeight(20)
    text("GAME OVER",30,400);
  }

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  dboard.display();
}

function keyPressed() {
  if (keyCode === 38) {
    Matter.Body.applyForce(dboard.body, dboard.body.position, {
      x: 0,
      y: -300,
    });
  }

  if (keyCode === 40) {
    Matter.Body.applyForce(dboard.body, dboard.body.position, {
      x: 0,
      y: 300 ,
    });
  }

  if (keyCode === 37) { 
    Matter.Body.applyForce(dboard.body, dboard.body.position, {
      x: -300 ,
      y: 0,
    });
  }

  if (keyCode === 39) {
    Matter.Body.applyForce(dboard.body, dboard.body.position, {
      x: 300 ,
      y: 0,
    });
  }
}