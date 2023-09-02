import React from "react";
import style from "./IndustryKnowledge.module.css";

const IndustryKnowledge = ({ title, img }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt={title} />
      <text className={style.title}>{title}</text>
    </div>
  );
};

export default IndustryKnowledge;
