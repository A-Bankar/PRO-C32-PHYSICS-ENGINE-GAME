class Player {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      restitution: 0.2,
      density: 1,
      friction: 0.2,

    };
    this.x = xInput;
    this.y = yInput;
    this.width = widthInput;
    this.height = heightInput;
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
    var playerpos = this.body.position;
    rectMode(CENTER);
    fill(69,420,420)
    push();
    translate(playerpos.x, playerpos.y);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
      