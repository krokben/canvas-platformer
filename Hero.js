class Hero {
  constructor(ctx, input, x, y, xVel, yVel, width, height, jumping, color) {
    this.ctx = ctx;
    this.input = input;
    this.x = x;
    this.y = y;
    this.xVel = 0;
    this.yVel = yVel;
    this.width = width;
    this.height = height;
    this.jumping = jumping;
    this.color = color;
  }

  init() {
    console.log('Hero created');
  }

  handleInput() {
    if (this.input.up && this.jumping === false) { // jump
      this.yVel -= 20;
      this.jumping = true;
    }
    if (this.input.left) { // go left
      this.xVel -= 0.5;
    }
    if (this.input.right) { // go right
      this.xVel += 0.5;
    }

    // move hero
    this.yVel += 1.5; // gravity
    this.x += this.xVel; // x position
    this.y += this.yVel; // y position
    this.xVel *= 0.9; // friction
    this.yVel *= 0.9; // friction

    // if hero is falling below floor line
    if (this.y > 180 - 16 - 32) {
      this.jumping = false;
      this.y = 180 - 16 - 32;
      this.yVel = 0;
    }

    if (this.x < -32) { // if hero is going off the left of the screen
      this.x = 320;
    } else if (this.x > 320) { // right of the screen
      this.x = -32;
    }
  }

  render() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
  }
}
