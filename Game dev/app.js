class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameWidth;

    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#8B18D1";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}

class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          paddle.moveLeft();

          break;
        case "ArrowRight":
          paddle.moveRight();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();

          break;
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();
          break;

        default:
          break;
      }
    });
  }
}

class Ball {
  constructor(gameWidth, gameHeight) {
    this.imgBall = document.querySelector("#img_ball");

    this.position = { x: 10, y: 10 };
    this.speed = { x: 2, y: 2 };

    this.size = 16;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  draw(ctx) {
    ctx.drawImage(
      this.imgBall,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}

//canvas screen
const canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//game screen heigths
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

//instances
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

//input handler class
new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.update(deltaTime);
  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
