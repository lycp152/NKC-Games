import React from "react";
import { Link } from "react-router-dom";
// Route, Routerを使う場合は上に足す（個人メモ）
import "./Home.css";

//JavaScriptのコードはここに記入

const Home = () => {
  return (
    <div className="layout">
      <h2>ホーム</h2>
      <p>ここはホーム画面です。</p>

      <p>サイトの説明</p>

      <div className="menu">
        <div className="game">
          <Link to="/breakout">
            <img
              src="./images/sample.jpg"
              className="Breakout"
              alt="logo"
            ></img>
          </Link>
          <p>説明</p>
          <p>　</p>
          <p>　</p>
        </div>

        <div className="game">
          <Link to="/typing">
            <img src="./images/sample.jpg" className="Typing" alt="logo"></img>
          </Link>
          <p>説明</p>
          <p>　</p>
          <p>　</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
