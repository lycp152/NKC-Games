import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/features/Home/Home";
import Breakout from "../src/features/Breakout/Breakout";
import Typing from "../src/features/Typing/Typing";
import News from "../src/features/News/News";

//ページ内リンク用ライブラリ
import { HashLink } from "react-router-hash-link";

//JavaScriptのコードはここに記入

const App = () => {
  return (
    <Router>
      <div className="body">
        <div className="main">
          {/*全ページ共通部分*/}
          <Link to="/">
            <h1>NKC Games</h1>
          </Link>

          <img src="./images/header01.png" className="top-img" alt=""></img>

          <nav>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <HashLink smooth to="/#game-menu">
                  ゲーム
                </HashLink>
              </li>
              <li>
                <Link to="/news">お知らせ</Link>
              </li>
            </ul>
          </nav>

          {/*リンクの設定*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breakout" element={<Breakout />} />
            <Route path="/typing" element={<Typing />} />
            <Route path="/news" element={<News />} />
          </Routes>

          <footer>
            <p>&copy;Copyright 2023 NKC All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
