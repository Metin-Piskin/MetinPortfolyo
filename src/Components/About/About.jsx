import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div style={{ width: "45%" }}>
        <text className={style.title}>About Me</text>
        <text className={style.text}>
          In the past, I started my software journey by learning C# and SQL and
          then moved on to web development. I gained experience in this field by
          learning HTML, CSS and JavaScript. Then, I decided to build my career
          in mobile programming and started learning React Native. I produced
          projects with React Native for a long time and then React Native
          switched from JavaScript to TypeScript. With this transition, I had
          the opportunity to learn TypeScript and currently, I continue to
          produce React Native projects using TypeScript. With these
          experiences, I have built a solid foundation for my future career
          goals.
        </text>
      </div>
      <div className={style.innercontainer}>
        <div className={style.skillcontainer}>
          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>Software</text>
            <text className={style.skilltext}>3+ Years</text>
          </div>
          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>JavaScript</text>
            <text className={style.skilltext}>2+ Years</text>
          </div>
          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>TypeScript</text>
            <text className={style.skilltext}>1+ Years</text>
          </div>
        </div>

        <div className={style.skillcontainer}>
          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>React Native</text>
            <text className={style.skilltext}>2+ Years</text>
          </div>

          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>React</text>
            <text className={style.skilltext}>1 Years</text>
          </div>
          <div className={style.skillinnercontainer}>
            <text className={style.skilltitle}>C#</text>
            <text className={style.skilltext}>1 Years</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
