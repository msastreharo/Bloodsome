class Blood {
  constructor(x) {
    this.x = x;
    this.y = 0 - scl;
    this.height = scl;
    this.width = scl / 1.5;
  }

  move(level) {
    let multiplier2;
    if (level === 1) {
      multiplier2 = 1;
    } else if (level === 2) {
      multiplier2 = 1.3;
    } else if (level === 3) {
      multiplier2 = 1.6;
    } else if (level === 4) {
      multiplier2 = 1.9;
    } else if (level === 5) {
      multiplier2 = 2.2;
    } else if (level === 6) {
      multiplier2 = 2.5;
    } else if (level === 7) {
      multiplier2 = 2.8;
    } else if (level === 8) {
      multiplier2 = 3.1;
    } else if (level === 9) {
      multiplier2 = 3.5;
    } else if (level >= 10) {
      multiplier2 = parseFloat(`4.${level}`);
    } else {
      multiplier2 = level * 10;
    }

    this.y += 3 * multiplier2;
  }

  draw() {
    image(bloodImage, this.x, this.y, this.width, this.height);
  }
}
