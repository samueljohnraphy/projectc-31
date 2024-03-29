class Particle {
    constructor(x, y,r) {
        var options = {
           " restitution": 1,
            "friction": 0
            
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.colour=color(random(0,250),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }}
