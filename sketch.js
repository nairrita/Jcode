const Engine = Matter.Engine
const World = Matter.World
const Bodies  = Matter.Bodies

var engine,world, box1,ground




function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
 
  box1= Bodies.rectangle(300,300,70,70)

  World.add(world,box1)


  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,380,800,50,options)
  World.add(world,ground)


}
// we are using p5 library draw function to draw the physics object on the canvas 
function draw() {
  background(0);  
 Engine.update(engine)

 rectMode(CENTER)
 rect(box1.position.x,box1.position.y,70,70)

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,50)
 

}