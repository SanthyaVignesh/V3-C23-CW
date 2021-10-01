const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var tower,ground,cannon;


function preload() {
    bgImg = loadImage("./assets/background.gif");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  //Step 3:
  angleMode(DEGREES);
  var angle = 15;

  tower = new Tower(160,350,160,310);
  ground = new Ground(0,height-1,width*2,20);

  cannon = new Cannon(180,110,130,100,angle);

  //step 4
  cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw() {
  background(189);
  image(bgImg,0,0,1200,600);

  Engine.update(engine);
  tower.display();
  ground.display();
  cannon.display();
  //step 5
  cannonBall.display();
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    //Step 6 :====> Step 7 CannonBall.js
    cannonBall.shoot();
  }
}
