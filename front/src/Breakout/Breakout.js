import React, { useEffect, useState } from "react";
import "./Breakout.css";

const Breakout = () => {
  const [gameState, setGameState] = useState("start");

  function startGame() {
    setGameState("playing");
    // ゲームが開始されたときの追加のセットアップやアクション
  }

  function gameButton() {
    if (gameState === "start") {
      startGame();
    }
  }

  useEffect(() => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    let paddleHeight = 30;
    let paddleWidth = 90;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;
    let brickRowCount = 6;
    let brickColumnCount = 6;
    let brickWidth = 80;
    let brickHeight = 25;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;
    let score = 0;
    let lives = 3;

    let bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function keyDownHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    }

    function mouseMoveHandler(e) {
      let relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
      }
    }

    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if (b.status === 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              score++;
              if (score === brickRowCount * brickColumnCount) {
                alert("YOU WIN, CONGRATS!");
                document.location.reload();
              }
            }
          }
        }
      }
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            let brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
            let brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            if (c === 0) {
              ctx.fillStyle = "#0000FF";
            } else if (c === 1) {
              ctx.fillStyle = "#0066FF";
            } else if (c === 2) {
              ctx.fillStyle = "#5D99FF";
            } else if (c === 3) {
              ctx.fillStyle = "#A4C6FF";
            } else if (c === 4) {
              ctx.fillStyle = "b3d9ff";
            } else if (c === 5) {
              ctx.fillStyle = "b3f2ff";
            }
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }

    function drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("スコア: " + score, 8, 20);
    }

    function drawLives() {
      ctx.font = "20px Arial";
      ctx.fillStyle = "#ff69b4";
      if (lives === 3) {
        ctx.fillText("❤︎❤︎❤︎", canvas.width - 85, 20);
      } else if (lives === 2) {
        ctx.fillText("❤︎❤︎", canvas.width - 85, 20);
      } else if (lives === 1) {
        ctx.fillText("❤︎", canvas.width - 85, 20);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (gameState === "playing") {
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }
        if (y + dy < ballRadius) {
          dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
          if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
          } else {
            lives--;
            if (!lives) {
              alert("ゲームオーバー");
              document.location.reload();
            } else {
              x = canvas.width / 2;
              y = canvas.height - 30;
              dx = 3;
              dy = -3;
              paddleX = (canvas.width - paddleWidth) / 2;
            }
          }
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) {
          paddleX += 7;
        } else if (leftPressed && paddleX > 0) {
          paddleX -= 7;
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
      }
    }

    draw();
  }, [gameState]);

  return (
    <>
      <canvas id="myCanvas" width="600" height="500"></canvas>

      {gameState === "start" && (
        <div className="btn-container">
          <button
            id="start"
            onClick={gameButton}
            className="btn-circle-border-double"
          >
            START
          </button>
        </div>
      )}
      <div className="explanation">
        <p>操作説明</p>
        <p>----------------------------------------------------------------</p>
        <p>矢印キーorマウス：移動</p>
        <p>画面下のバーを左右に動かして、ブロックをすべて壊そう！</p>
      </div>
    </>
  );
};

export default Breakout;
