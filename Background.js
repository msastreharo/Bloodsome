class Background {
  constructor() {
    this.x = 0;
  }

  setup() {
    this.height = HEIGHT;
    this.width = WIDTH;
  }

  draw() {
    this.x = 0;
    image(bgImage, this.x, 0, this.width, this.height);
  }
}
