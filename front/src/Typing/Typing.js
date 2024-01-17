import React, { useEffect } from "react";
import "./Typing.css";
import okAudio from "./ok.mp3";
import goodAudio from "./good.mp3";

const Typing = () => {
  useEffect(() => {
    const Q = [
      "apple",
      "banana",
      "melon",
      "mango",
      "strawberry",
      "blueberry",
      "orange",
      "grapes",
      "dragonfruit",
      "mangosteen",
      "kiwi",
      "lemon",
      "papaya",
      "cheery",
      "watermelon",
    ];

    let Q_No = -1;
    let Q_i = 0;
    let Q_l = 0;
    let count = 0;
    let isGameActive = false;
    let countdownInterval; // カウントダウンのインターバルを格納する変数

    const timer = document.getElementById("timer");
    let TIME = 20;

    function countdown() {
      TIME = Math.max(0, TIME - 1);
      timer.textContent = "制限時間：" + TIME + "秒";
      if (TIME <= 0) finish();
    }

    function push_Keydown(event) {
      if (!isGameActive) {
        init();
        isGameActive = true;
        countdownInterval = setInterval(countdown, 1000);
      }

      if (isResultDisplayed()) {
        return; // 結果画面が表示されている場合は処理を中断
      }

      let keyCode = event.key;
      document.getElementById("img").src = require("./" + Q[Q_No] + ".png");
      if (Q_l === Q_l - Q_i) {
        document.getElementById("start").innerHTML = Q[Q_No].substring(
          Q_i,
          Q_l
        );
      }

      if (Q[Q_No].charAt(Q_i) === keyCode) {
        Q_i++;
        document.getElementById("start").innerHTML = Q[Q_No].substring(
          Q_i,
          Q_l
        );

        if (Q_l - Q_i === 0) {
          new Audio(okAudio).play();
          count++;
          init();
        } else {
          new Audio(goodAudio).play();
        }
      }
    }

    function finish() {
      clearInterval(countdownInterval);
      document.getElementById("start").textContent =
        "正解数は" + count + "個でした！";
      document.getElementById("timer").textContent = "enterを押してください。";
      isGameActive = false;

      // Enterキーが押されたときに新しいラウンドを開始するイベントリスナーを追加
      window.addEventListener("keydown", handleKeyDown);
    }

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        window.removeEventListener("keydown", handleKeyDown);
        clearInterval(countdownInterval); // 既存のインターバルをクリア
        init();
        isGameActive = true;
        TIME = 20;
        countdownInterval = setInterval(countdown, 1000); // 新しいインターバルを設定
        count = 0;
      } else {
        finish();
      }
    }

    function init() {
      Q_No = Math.floor(Math.random() * Q.length);
      Q_i = 0;
      Q_l = Q[Q_No].length;
      document.getElementById("img").src = require("./" + Q[Q_No] + ".png");
      document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
    }

    function isResultDisplayed() {
      // 結果が表示されているかどうかを確認
      return (
        !isGameActive &&
        document.getElementById("start").textContent !==
          "何かキーを押して下さい"
      );
    }

    window.addEventListener("keydown", push_Keydown);

    return () => {
      clearInterval(countdownInterval);
      window.removeEventListener("keydown", push_Keydown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <center>
        <p>
          <img src="" id="img" alt="" />
        </p>
        <h1 id="start" className="text">
          キーを押してスタート！
        </h1>

        <p id="timer">制限時間：20秒</p>
      </center>
      <div className="explanation">
        <p>操作説明</p>
        <p>---------------------------------------------------------------</p>
        <p>特になし</p>
        <p>画面に表示されたお題をキーボードで素早く入力しよう！</p>
      </div>
    </>
  );
};

export default Typing;
