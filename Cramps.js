class Cramp {
  constructor(x) {
    this.x = x;
    this.y = 0 - scl;
    this.height = scl;
    this.width = scl / 1.5;
  }

  move(level) {
    let multiplier1;
    if (level === 1) {
      multiplier1 = 1.3;
    } else if (level === 2) {
      multiplier1 = 1.6;
    } else if (level === 3) {
      multiplier1 = 1.9;
    } else if (level === 4) {
      multiplier1 = 2.2;
    } else if (level === 5) {
      multiplier1 = 2.5;
    } else if (level === 6) {
      multiplier1 = 2.8;
    } else if (level === 7) {
      multiplier1 = 3.1;
    } else if (level === 8) {
      multiplier1 = 3.5;
    } else if (level === 9) {
      multiplier1 = 3.8;
    } else if (level >= 10) {
      multiplier1 = parseFloat(`4.${level}`);
    } else {
      multiplier1 = level * 10;
    }
    this.y += 3 * multiplier1;
  }

  draw() {
    image(crampImage, this.x, this.y, this.width, this.height);
  }
}
