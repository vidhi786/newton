class Bob {
    constructor(x, y, r) {
      var options = {
          //'restitution':0.2,
          'frictionAir':0.005,
          'density':1.0,
         //isStatic:true
          
    
      }
      this.body = Bodies.circle(x,y,r,options)
      this.r=r;
      this.image=loadImage("paper(1).png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x,pos.y,this.r);
      //var pointA=this.chain.bodyA.position;
      //var pointB=this.chain.bodyB.position;
      //strokeWeight(4);
      //line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }
  }
