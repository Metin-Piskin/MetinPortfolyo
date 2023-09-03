import React from "react";
import style from "./Welcome.module.css";
import Metin from "../../Assets/Metin.png";

const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.textdiv}>
        <text className={style.text}>Hello I am Metin P.</text>
        <div> React - React Native</div>
        <div>Developer</div>
      </div>
      <img className={style.Avatar} alt="Metin" src={Metin} />
    </div>
  );
};

export default Welcome;
