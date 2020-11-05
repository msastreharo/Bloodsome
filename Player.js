class Player {
  constructor() {
    this.x = 185;
    this.y = 480;
    this.height = 110;
    this.width = 30;
    this.floor = 500;
    this.leftWall = 0;
  }

  moveLeft(scl) {
    this.x += scl;
  }

  moveRight(scl) {
    this.x -= scl;
  }

  draw() {
    image(playerImage, this.x, this.y, this.width, this.height);

    this.x = constrain(this.x, 0, WIDTH - scl); // Limit so player doesn't leave board.
  }
}
