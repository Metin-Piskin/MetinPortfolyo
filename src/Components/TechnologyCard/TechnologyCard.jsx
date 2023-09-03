import React from "react";
import style from "./TechnologyCard.module.css";
const TechnologyCard = ({ title, img }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt={title} />
      <div className={style.title}>{title}</div>
    </div>
  );
};

export default TechnologyCard;
