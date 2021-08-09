class Package {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color(random(0, 255), (0, 255), 0, 255);
    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      options
    );
    World.add(userWorld, this.body);
    this.dboard = loadImage("Untitled.png");
  }
  display() {
    var Packagepos = this.body.position;

    push();
    translate(Packagepos.x, Packagepos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(this.color);
    strokeWeight(3);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
