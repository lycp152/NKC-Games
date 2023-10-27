import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Breakout from "./Breakout/Breakout";
import Typing from "./Typing/Typing";

//JavaScriptのコードはここに記入

const App = () => {
  return (
    <Router>
      <div className="main">
        {/*全ページ共通部分*/}
        <h1>サイト名</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/breakout">ブロック崩し</Link>
            </li>
            <li>
              <Link to="/typing">タイピングゲーム</Link>
            </li>
          </ul>

          <p>※レイアウト確認のため色付けてます</p>
        </nav>

        {/*リンクの設定*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakout" element={<Breakout />} />
          <Route path="/typing" element={<Typing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
