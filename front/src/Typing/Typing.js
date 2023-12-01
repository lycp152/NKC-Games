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
        setInterval(countdown, 1000);
      }

      let keyCode = event.key;
      document.getElementById("img").src = require("./" + Q[Q_No] + ".png");
      if (Q_l === Q_l - Q_i) {
        //document.getElementById("img").src = Q[Q_No] + ".png";

        document.getElementById("start").innerHTML = Q[Q_No].substring(
          Q_i,
          Q_l
        );
        // var speak = new SpeechSynthesisUtterance();
        // speak.text = Q[Q_No];
        //speak.lang = "en-US";
        //speechSynthesis.speak(speak);//
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
      clearInterval(countdown);
      document.getElementById("start").textContent =
        "正解数は" + count + "個でした！";
      isGameActive = false;
    }

    function init() {
      Q_No = Math.floor(Math.random() * Q.length);
      Q_i = 0;
      Q_l = Q[Q_No].length;
      document.getElementById("img").src = require("./" + Q[Q_No] + ".png");
      document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);
    }

    window.addEventListener("keydown", push_Keydown);

    return () => {
      clearInterval(countdown);
      window.removeEventListener("keydown", push_Keydown);
    };
  }, []);

  return (
    <>
      <center>
        <p>
          <img src="" id="img" alt="" />
        </p>
        <h1 id="start" className="text">
          何かキーを押して下さい
        </h1>
        <p id="timer">制限時間：20秒</p>
      </center>
    </>
  );
};

export default Typing;
