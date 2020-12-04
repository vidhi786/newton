class Rope{
    constructor(bodyA,bodyB,x,y){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:x,y:y},
            stiffness:1,
            length:120
        }
    this.chain=Constraint.create(option);
    World.add(world,this.chain);
    this.x=x;
    this.y=y;
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var pointX=this.x;
        var pointY=this.y;
        strokeWeight(4);
        line(pointA.x+pointX,pointA.y+pointY,pointB.x,pointB.y);
    }
}