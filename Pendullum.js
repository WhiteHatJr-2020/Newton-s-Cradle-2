class Pendullum {
    constructor(x, y, color) 
    {
      var options = 
      { 
        restitution: 1,
        frictionAir: 0.0,
        friction:0,
        slop:1,
        inertia: Infinity
      };
  
      this.body = Bodies.rectangle(x, y,40,40 ,options);
      this.color=color;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(this.color);
      rotate(angle);
      ellipse(0, 0, 50, 50);
      pop();
    }
  }
  