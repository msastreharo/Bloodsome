class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.bloodArr = [];
    this.crampArr = [];
    this.counter = 0;
    this.level = 1;
    this.highScore = 0;
  }

  setup() {
    this.background.setup();
    setInterval(timeIt, 1000);
  }

  draw() {
    this.background.draw();
    this.player.draw();

    // Displaying scoreboard

    fill(255, 255, 255, 200);
    rect(10, 10, 135, 30, 40);
    textSize(18);
    textStyle(BOLD);
    textFont("monospace");
    fill(0, 0, 0);
    text(`Score: ${this.counter}`, 25, 30);

    // TIMER
    fill(255, 255, 255, 200);
    rect(244, 10, 155, 30, 40);
    textSize(14);
    textStyle(BOLD);
    textFont("monospace");
    fill(0, 0, 0);
    text(`Level: ${this.level}, Time: ${timer}`, 254, 30);

    if (frameCount % 60 === 0 && timer >= 0) {
      timer--;
    }

    // GAME OVER
    if (timer === -1) {
      fill(255, 255, 255, 200);
      rect(50, 250, 300, 80, 40);
      textSize(30);
      textStyle(BOLD);
      textFont("monospace");
      fill(0, 0, 0);
      text("GAME OVER", 120, 290);
      gameover.play();

      // Display higher score when game ends
      if (this.counter >= this.highScore) {
        this.highScore = this.counter;
      }
      textSize(14);
      fill(200, 0, 0);
      text(`Your record is at ${this.highScore} points!`, 95, 315);

      noLoop(); // Stops game when timer runs out

      // Try again button
      const button2 = document.createElement("button");
      button2.innerText = `Play this level again`;
      button2.onclick = (event) => {
        event.target.style.display = "none";
        button1.style.display = "none";
        this.level = this.level;
        this.counter = 0;
        timer = 30;
        badum.play();
        loop(); // Keeps game going if we click button
      };
      buttonSection.appendChild(button2);

      // Next level button
      const button1 = document.createElement("button");
      button1.innerText = `Too easy? LEVEL UP!`;
      button1.onclick = (event) => {
        event.target.style.display = "none";
        button2.style.display = "none";
        this.level++;
        this.counter = 0;
        timer = 30;
        badum.play();
        loop(); // Keeps game going when we click button
      };
      buttonSection.appendChild(button1);
    } // end if-timer

    // BLOOD ARRAY ------------------------------------
    const randomFrameCount = Math.floor(random(15, 35));
    const shortFrameCount = Math.floor(random(70, 90));

    if (frameCount % randomFrameCount === 0) {
      const newBlood = new Blood(random(0, WIDTH - scl));
      this.bloodArr.push(newBlood);
    }

    for (let blood of this.bloodArr) {
      blood.move(this.level);
      blood.draw();

      // Splicing blood array when blood leaves y axis
      if (blood.y >= HEIGHT) {
        this.bloodArr.splice(this.bloodArr.indexOf(blood), 1);
      }
      // Splicing blood array when collision + add to counter
      if (this.collisionCheck(blood)) {
        this.bloodArr.splice(this.bloodArr.indexOf(blood), 1);
        this.counter += 10;
        ding.play();
      }
    }

    // CRAMP ARRAY ------------------------
    if (frameCount % shortFrameCount === 0) {
      const newCramp = new Cramp(random(0, WIDTH - scl));
      this.crampArr.push(newCramp);
    }

    for (let cramp of this.crampArr) {
      cramp.move(this.level);
      cramp.draw();

      // Splicing cramp array when cramps leave y axis
      if (cramp.y >= HEIGHT) {
        this.crampArr.splice(this.crampArr.indexOf(cramp), 1);
      }
      // Splicing cramp array when collision + deduce from counter
      if (this.collisionCheck(cramp)) {
        this.crampArr.splice(this.crampArr.indexOf(cramp), 1);
        this.counter -= 20;
        dong.play();
      }
    }

    // ARROW KEYS - MOVEMENTS
    if (keyIsDown(39)) {
      this.player.moveLeft(5);
    }
    if (keyIsDown(37)) {
      this.player.moveRight(5);
    }
  } // Close draw

  // Define collision check
  collisionCheck(obstacle) {
    if (this.player.x + this.player.width < obstacle.x) {
      return false;
    } else if (obstacle.x + obstacle.width < this.player.x) {
      return false;
    } else if (this.player.y > obstacle.y + obstacle.height) {
      return false;
    } else if (obstacle.y > this.player.y + this.player.height) {
      return false;
    } else {
      return true;
    }
  } // Close collision check
} // Close Game class
