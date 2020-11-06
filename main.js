const game = new Game();
const intro = new Intro();
let level = "Intro";
const songButton2 = document.querySelector(".songbutton");
songButton2.onclick = (event) => {
  song.play();
  event.target.style.display = "none";
};

function preload() {
  bgImage = loadImage("./imgs/background.jpg");
  playerImage = loadImage("./imgs/tampon-8bit.png");
  bloodImage = loadImage("./imgs/blood-8bit.png");
  crampImage = loadImage("./imgs/cramp-8bit.png");
  song = loadSound("./sounds/intro-song.m4a");
  ding = loadSound("./sounds/ding.m4a");
  dong = loadSound("./sounds/dong.m4a");
  gameover = loadSound("./sounds/gameover-song.m4a");
  badum = loadSound("./sounds/badum.m4a");
}

function setup() {
  createCanvas(400, 600);
  intro.setup();
}

function draw() {
  clear();

  if (level === "Intro") {
    background(bgImage);
    intro.draw();
  } else {
    background(bgImage);
    game.draw();
  }
}

function startGame() {
  level = "game";
  startButton.hide();
  song.stop();
}
