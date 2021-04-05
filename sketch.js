const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    
     box1 = new Box(200,300,50,50);
    box2 = new Box(280,100,50,50);
    ground1=new Ground(600,390,1200,5);
    
}

function draw(){
    background(0);
    Engine.update(engine);
        
        box2.display();
    box1.display();
    ground1.display();
}
