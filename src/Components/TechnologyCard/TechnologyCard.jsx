import React from "react";
import style from "./TechnologyCard.module.css";
const TechnologyCard = ({ title, img }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt={title} />
      <text className={style.title}>{title}</text>
    </div>
  );
};

export default TechnologyCard;
