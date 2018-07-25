class Input {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
  }

  init() {
    window.addEventListener('keydown', (e) => this.listen(e));
    window.addEventListener('keyup', (e) => this.listen(e));
  }

  listen(e) {
    const keyState = e.type === 'keydown' ? true : false;
    switch(e.keyCode) {
      case 37:
        this.left = keyState;
        break;
      case 38:
        this.up = keyState;
        break;
      case 39:
        this.right = keyState;
        break;
      default:
        return null;
    }
  }
}