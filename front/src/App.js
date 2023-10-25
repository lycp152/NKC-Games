import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Breakout from "./Breakout/Breakout";
import Typing from "./Typing/Typing";

//JavaScriptのコードはここに記入

const App = () => {
  return (
    <Router>
      <>
        <h1>サイト名</h1>
        <nav>
          <ul>
            <li>
              <Link to="/breakout">ブロック崩し</Link>
            </li>
            <li>
              <Link to="/typing">タイピングゲーム</Link>
            </li>
          </ul>
        </nav>

        {/*リンクの設定*/}
        <Routes>
          <Route path="/breakout" element={<Breakout />} />
          <Route path="/typing" element={<Typing />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
