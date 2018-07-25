class Game {
  constructor(ctx, input, hero) {
    this.ctx = ctx;
    this.input = input;
    this.hero = hero;
  }

  init() {
    this.input.init();
    this.hero.init();
    setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.hero.handleInput();
    this.render();
  }

  render() {
    this.renderStatics();
    this.hero.render();
  }

  renderStatics() {
    // background
    this.ctx.fillStyle = '#202020';
    this.ctx.fillRect(0, 0, 320, 180);

    // floor
    this.ctx.strokeStyle = '#333333';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 164);
    this.ctx.lineTo(320, 164);
    this.ctx.stroke();
  }
}

window.onload = () => {
  const ctx = document.getElementById('canvas').getContext('2d');
  const input = new Input();
  const hero = new Hero(ctx, input, 144, 0, 0, 0, 32, 32, true, '#ffffff');
  const game = new Game(ctx, input, hero);
  game.init();
};
