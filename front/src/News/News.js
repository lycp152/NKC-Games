import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

//JavaScriptのコードはここに記入

const News = () => {
  return (
    <div>
      <h2>お知らせ</h2>
      <ul className="news-list">
        <div className="news-content">
          <p className="date">2023.xx.xx</p>
          <p className="news">
            遊べるゲームに<Link to="/typing">タイピングゲーム</Link>
            を追加しました。
          </p>
        </div>
        <div className="news-content">
          <p className="date">2023.xx.xx</p>
          <p className="news">
            遊べるゲームに<Link to="/breakout">ブロック崩し</Link>
            を追加しました。
          </p>
        </div>
        <div className="news-content">
          <p className="date">2023.xx.xx</p>
          <p className="news">
            サイトを開設しました。（<Link to="/">NKC Games</Link>）
          </p>
        </div>
      </ul>
    </div>
  );
};

//コピー用
//<p>20xx.07.20 <a href="http://xxxxxxx">更新情報２</a></p>

export default News;
