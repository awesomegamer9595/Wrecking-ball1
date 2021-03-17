class Block{

constructor(x,y,width,height){
var options={
density:5.0,
friction:0.04,
restitution:0.5

}
this.x=x
this.y=y
this.height=height
this.width=width
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
}
display(){
var pos=this.body.position
var angle=this.body.angle
push();
fill("black")
stroke("gold");
strokeWeight(4);
rotate(angle)
translate(pos.x,pos.y)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop();


}




















}