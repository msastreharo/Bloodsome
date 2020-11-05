class Intro {
  constructor() {
    this.x = 0;
  }

  setup() {
    this.height = HEIGHT;
    this.width = WIDTH;
    this.songButton = document.querySelector(".songbutton");

    // Start game button
    startButton = createButton("START");
    startButton.position(165, 590);
    startButton.addClass("startbutton");
    startButton.mousePressed(startGame);

    this.songButton.onclick = (event) => {
      song.play();
      event.target.style.display = "none";
    };

    if (level === "game" && songButton.onclick == false) {
      songButton.hide();
    }
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
