import React from "react";
import style from "./ProjectCard.module.css";
import Githublogo from "../../Assets/githublogo.png";
import GooglePlayİcon from "../../Assets/GooglePlayİcon.png";

const ProjectCard = ({
  banner,
  title,
  technologys,
  githubURL,
  googleplayURL,
  onClick
}) => {
  return (
    <div className={style.Container} onClick={onClick}>
      <div className={style.İconContainer}>
        {githubURL ? (
          <img className={style.Urlİcon} alt="githubURL" src={Githublogo} />
        ) : (
          <></>
        )}
        {googleplayURL ? (
          <img
            className={style.Urlİcon}
            alt="googleplayURL"
            src={GooglePlayİcon}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={style.BannerContainer}>
        <img className={style.Banner} alt="banner" src={banner} />
      </div>
      <div className={style.Title}>{title}</div>
      <div className={style.TechnologysContainer}>
        {technologys.map((e) => {
          return <div className={style.Technologys}>{e}</div>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
