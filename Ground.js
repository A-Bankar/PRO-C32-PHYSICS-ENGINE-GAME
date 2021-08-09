class Ground {
    constructor(xInput, yInput, widthInput, heightInput) {
      var options = {
        isStatic: true,
        restitution: 0,
        density: 2,
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
    }
    display() {
      var groundpos = this.body.position;
  
      push();
      translate(groundpos.x, groundpos.y);
      strokeWeight(3);
      fill("gray");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  