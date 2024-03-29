import React from "react";
import { Link } from "react-router-dom";
// Route, Routerを使う場合は上に足す（個人メモ）
import "./Home.css";

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
      <div className="menu" id="game-menu">
        <div className="game-left">
          <Link to="/breakout">
            <img
              src="./images/breakout_image.png"
              className="Breakout"
              alt="game"
            ></img>
          </Link>
          <p className="game-title">ブロック崩し</p>
          <p>バーを動かしてブロックを全て壊そう！</p>
        </div>

        <div className="game-right">
          <Link to="/typing">
            <img
              src="./images/typing_image.png"
              className="Typing"
              alt="game"
            ></img>
          </Link>
          <p className="game-title">タイピングゲーム</p>
          <p>画面に表示されたお題を素早く入力しよう！</p>
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
