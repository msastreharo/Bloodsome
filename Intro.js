class Intro {
  constructor() {
    this.x = 0;
  }

  setup() {
    this.height = HEIGHT;
    this.width = WIDTH;

    // Start game button
    startButton = createButton("START");
    startButton.position(165, 575);
    startButton.addClass("startbutton");
    startButton.mousePressed(startGame);

    // Play song before game button (stops at main.js)
    songButton = createButton(
      "Click here to listen to the intro song (before playing)"
    );
    songButton.position(20, 268);
    songButton.addClass("songbutton");
    songButton.onclick = (event) => {
      song.play();
      event.target.style.display = "none";
    };
  }

  draw() {
    textStyle(BOLD);
    fill(255, 255, 255, 200);
    rect(75, 200, 240, 150, 40);
    fill(0, 0, 0);
    textSize(14);
    text(`Click here to start a new game`, 95, 250);
  } // End of draw
} // End of Intro class
