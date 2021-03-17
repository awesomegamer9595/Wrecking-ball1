const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var blocks=[]

var ball1,rope1,ground

function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,550,1200,20);
   ball1= new Ball(200,200,40)
rope1=new Rope(ball1.body,{x:400,y:100})


for(var i=0;i<5;i++){


blocks.push(new Block(600,100,70,70))
blocks.push(new Block(670,100,70,70))
blocks.push(new Block(750,100,70,70))
}
}

function draw(){
    background("skyblue");
    Engine.update(engine);
 ground.display();
console.log(ball1.x);
ball1.display();
 rope1.display();


for(var i=0;i<blocks.length;i++){

blocks[i].display();

}


}
function mouseDragged(){

    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}