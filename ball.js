class Ball{
constructor(x,y,radius){
var options={
  density:1.0,
 frictionAir:0.012
}
this.x=x
this.y=y
this.radius=radius
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
}

display(){

var pos=this.body.position
var angle=this.body.angle
push();
rotate(angle)
translate(pos.x,pos.y)
ellipseMode(CENTER)
ellipse(0,0,this.radius*2,this.radius*2)
pop();
}
}