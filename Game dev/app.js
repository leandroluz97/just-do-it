function detectionCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
};

class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameWidth;

    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
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
  constructor(paddle, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          paddle.moveLeft();

          break;
        case "ArrowRight":
          paddle.moveRight();
          break;

        case "Space":
          game.togglePause();
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
  constructor(game) {
    this.image = document.querySelector("#img_ball");

    this.position = { x: 10, y: 400 };
    this.speed = { x: 4, y: -2 };

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    //wall top or bottom
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //check collision with paddle

    if (detectionCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}

class Brick {
  constructor(game, position) {
    this.image = document.querySelector("#img_brick");

    this.position = position;

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectionCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex,
        };

        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle, this);
  }

  update(deltatime) {
    if (this.gamestate == GAMESTATE.PAUSED) return;

    this.gameObjects.forEach((object) => object.update(deltatime));

    this.gameObjects = this.gameObjects.filter(
      (object) => !object.markedForDeletion
    );
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));

    if (this.gamestate == GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  togglePause() {
    if (this.gamestate == GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}

//canvas screen
const canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//game screen heigths
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
