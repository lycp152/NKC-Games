import React from "react";
import "./News.css";

//JavaScriptのコードはここに記入

const News = () => {
  return (
    <div>
      <h2>お知らせ</h2>
      <ul className="news-list">
        <div className="content">
          <p className="date">20xx.xx.xx</p>
          <p className="news">お知らせが入りますお知らせが入ります</p>
        </div>
        <div className="content">
          <p className="date">20xx.xx.xx</p>
          <p className="news">お知らせが入りますお知らせが入ります</p>
        </div>
      </ul>
    </div>
  );
};

//コピー用
//<p>20xx.07.20 <a href="http://xxxxxxx">更新情報２</a></p>

export default News;
