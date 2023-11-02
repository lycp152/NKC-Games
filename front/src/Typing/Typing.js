import React, { useEffect } from "react";
import "./Typing.css";

const Typing = () => {
  useEffect(() => {
    let Q = [
      "apple",
      "banana",
      "melon",
      "mango",
      "starwberry",
      "blueberry",
      "orange",
    ]; //問題文
    let Q_No = Math.floor(Math.random() * Q.length); //問題をランダムで出題する

    let Q_i = 0; //回答初期値・現在単語どこまで合っているか判定している文字番号
    let Q_l = Q[Q_No].length; //計算用の文字の長さ

    window.addEventListener("keydown", push_Keydown);

    function push_Keydown(event) {
      let keyCode = event.key;
      if (Q_l == Q_l - Q_i) {
        document.getElementById("start").innerHTML = Q[Q_No].substring(
          Q_i,
          Q_l
        ); //問題を書き出す
      }

      if (Q[Q_No].charAt(Q_i) == keyCode) {
        //押したキーが合っていたら

        Q_i++; //判定する文章に１足す
        document.getElementById("start").innerHTML = Q[Q_No].substring(
          Q_i,
          Q_l
        ); //問題を書き出す

        if (Q_l - Q_i === 0) {
          //全部正解したら

          new Audio("ok.mp3").play(); // 音声再生;

          Q_No = Math.floor(Math.random() * Q.length); //問題をランダムで出題する
          Q_i = 0; //回答初期値・現在どこまで合っているか判定している文字番号
          Q_l = Q[Q_No].length; //計算用の文字の長さ

          document.getElementById("start").innerHTML = Q[Q_No].substring(
            Q_i,
            Q_l
          ); //新たな問題を書き出す
        } else {
          new Audio("good.mp3").play(); // 音声再生;
        }
      }
    }
  }, []);

  return (
    <>
      <center>
        <h1 id="start" className="text">
          何かキーを押して下さい
        </h1>
      </center>
    </>
  );
};

export default Typing;
