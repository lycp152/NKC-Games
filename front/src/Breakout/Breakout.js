import React, { useEffect } from "react";
import "./Breakout.css";

const Breakout = () => {
  useEffect(() => {
    //JavaScriptのコードはここに記入
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      x += dx;
      y += dy;
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
      }
    }

    setInterval(draw, 10);
  }, []);

  return (
    <>
      <h2>ブロック崩し</h2>
      <p>ここはブロック崩しの画面です。</p>
      <canvas id="myCanvas" width="480" height="320"></canvas>
    </>
  );
};

export default Breakout;
