class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            'restitution' : 0.3,
            'friction' : 0,
            'density' : 1.2

        }
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();

}

}