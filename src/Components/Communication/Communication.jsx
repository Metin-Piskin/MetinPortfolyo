import React from "react";
import style from "./Communication.module.css";

import Instagramlogo from "../../Assets/Instagramlogo.png";
import twitterlogo from "../../Assets/twitterlogo.png";
import linkedinlogo from "../../Assets/linkedinlogo.png";
import googleplaylogo from "../../Assets/googleplaylogo.png";
import githubwhitelogo from "../../Assets/githubwhitelogo.png";
import facebookicon from "../../Assets/facebookicon.png";

const Communication = () => {
  return (
    <div className={style.Container}>
      <div className={style.Strip}></div>
      <div className={style.İnnerContainer}>
        <div>
          <div className={style.Title}>Metin P.</div>
        </div>
        <div>
          <div className={style.LogosContainer}>
            <a
              className={style.LogoContainer}
              href="https://www.linkedin.com/in/metin-pi%C5%9Fkin-9489b3245/"
            >
              <img
                className={style.Logo}
                alt="linkedinlogo"
                src={linkedinlogo}
              />
            </a>
            <a
              className={style.LogoContainer}
              href="https://github.com/Metin-Piskin"
            >
              <img
                className={style.Logo}
                alt="githubwhitelogo"
                src={githubwhitelogo}
              />
            </a>
            <a
              className={style.LogoContainer}
              href="https://www.instagram.com/metin_piskin/"
            >
              <img
                className={style.Logo}
                alt="Instagramlogo"
                src={Instagramlogo}
              />
            </a>
          </div>
          <div className={style.LogosContainer}>
            <a
              className={style.LogoContainer}
              href="https://play.google.com/store/apps/dev?id=8701239425085313187"
            >
              <img
                className={style.Logo}
                alt="googleplaylogo"
                src={googleplaylogo}
              />
            </a>
            <a
              className={style.LogoContainer}
              href="https://twitter.com/MtnPskn"
            >
              <img className={style.Logo} alt="twitterlogo" src={twitterlogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
