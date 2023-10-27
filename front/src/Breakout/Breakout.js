import React from "react";
import "./Breakout.css";

//JavaScriptのコードはここに記入
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

const Breakout = () => {
  return (
    <>
      <h2>ブロック崩し</h2>
      <p>ここはブロック崩しの画面です。</p>
      <canvas id="myCanvas" width="480" height="320"></canvas>
    </>
  );
};

export default Breakout;
