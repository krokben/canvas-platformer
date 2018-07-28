class Frames {
  constructor() {
    this.counter = 0;
    this.current = 0;
  }

  update() {
    this.counter++;
    if (this.counter % 10 === 0) this.current++; // delay for spritesheet
  }
}
