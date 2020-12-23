class Paper{
     paper_options={
        //restitution gives bounciness effect
        restitution:1
      }
    constructor(x,y,radius,options,maxsides){
        Matter.Bodies.circle(56,46,55,55);
        World.add(world,this.paper,);
    }
    
    display(){
        var pos=this.paper.position;
        var angle=this.paper.angle;
        //to apply new settings
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(radius);
        ellipse(ball.position.x,ball.position.y,50,50);
        //to revert to old settings
        pop();
    }
}