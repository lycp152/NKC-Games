import React, { useEffect } from "react";
import "./Typing.css";

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
    ]; //問題文
    let Q_No = Math.floor(Math.random() * Q.length); //問題をランダムで出題する

    function push_Keydown(event) {
      let keyCode = event.key;
      document.getElementById("push").innerHTML = keyCode + "を押しました";
      document.getElementById("start").innerHTML = Q[Q_No];
    }

    window.addEventListener("keydown", push_Keydown);
  }, []);

  return (
    <>
      <h1 id="push">何かキーを押して下さい</h1>
      <h1 id="start">問題をここに出題します</h1>
    </>
  );
};

export default Typing;
