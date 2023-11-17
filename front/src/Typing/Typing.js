import React, { useEffect } from "react";
import "./Typing.css";
import okAudio from "./ok.mp3";
import goodAudio from "./good.mp3";

const Typing = () => {
  useEffect(() => {
    let Q = [
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
    ];
    let Q_No = Math.floor(Math.random() * Q.length);

    let Q_i = 0;
    let Q_l = Q[Q_No].length;

    window.addEventListener("keydown", push_Keydown);

    function push_Keydown(event) {
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

          Q_No = Math.floor(Math.random() * Q.length);
          Q_i = 0;
          Q_l = Q[Q_No].length;

          // document.getElementById("img").src = Q[Q_No] + ".png";
          document.getElementById("img").src = require("./" + Q[Q_No] + ".png");
          document.getElementById("start").innerHTML = Q[Q_No].substring(
            Q_i,
            Q_l
          );
        } else {
          new Audio(goodAudio).play();
        }
      }
    }
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
      </center>
    </>
  );
};

export default Typing;
