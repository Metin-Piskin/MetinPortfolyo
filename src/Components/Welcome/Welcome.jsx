import React from "react";
import style from "./Welcome.module.css";
import Behzat from "../../Assets/Behzat.jpg";
const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.textdiv}>
        <text className={style.text}>Hello I am Metin</text>
        <div> React - React Native</div>
        <div>Developer</div>
      </div>
      <img alt="Behzat" src={Behzat} />
    </div>
  );
};

export default Welcome;
