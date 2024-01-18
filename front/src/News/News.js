import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

//JavaScriptのコードはここに記入

const News = () => {
  return (
    <div>
      <div className="content">
        <div className="title">
          <h3>お知らせ</h3>
        </div>
      </div>

      <ul className="news-list">
        <div className="news-content">
          <p className="date">2023.12.20</p>
          <p className="news">
            遊べるゲームに<Link to="/typing">タイピングゲーム</Link>
            を追加しました。
          </p>
        </div>
        <div className="news-content">
          <p className="date">2023.12.01</p>
          <p className="news">
            遊べるゲームに<Link to="/breakout">ブロック崩し</Link>
            を追加しました。
          </p>
        </div>
        <div className="news-content">
          <p className="date">2023.11.29</p>
          <p className="news">
            サイトを開設しました。（<Link to="/">NKC Games</Link>）
          </p>
        </div>
        <p className="update">
          [最終更新] 2024.01.17
          <br />
        </p>
      </ul>
    </div>
  );
};

//コピー用
//<p>20xx.07.20 <a href="http://xxxxxxx">更新情報２</a></p>

export default News;
