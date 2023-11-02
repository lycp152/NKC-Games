import React from "react";
import { Link } from "react-router-dom";
// Route, Routerを使う場合は上に足す（個人メモ）
import "./Home.css";

//JavaScriptのコードはここに記入

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <div className="layout">
      <div className="content">
        <div className="title">
          <h3>当サイトについて</h3>
        </div>
        <p>
          当サイトは名古屋工学院専門学校
          情報処理学科の卒業制作によって作成されたブラウザゲームサイトです。
        </p>
      </div>

      <div className="menu">
        <div className="game">
          <Link to="/breakout">
            <img
              src="./images/sample.jpg"
              className="Breakout"
              alt="logo"
            ></img>
          </Link>
          <p className="game-title">ブロック崩し</p>
          <p>ゲームの説明</p>
        </div>

        <div className="game">
          <Link to="/typing">
            <img src="./images/sample.jpg" className="Typing" alt="logo"></img>
          </Link>
          <p className="game-title">タイピングゲーム</p>
          <p>ゲームの説明</p>
        </div>
      </div>
      <img
        className="top-button"
        src="./images/button.png"
        alt="ロゴ画像"
        onClick={returnTop}
      />
    </div>
  );
};

export default Home;
