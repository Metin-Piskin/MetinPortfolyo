import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"

import style from "./Home.module.css";

import Header from "../../Components/Header";
import Welcome from "../../Components/Welcome";
import About from "../../Components/About";
import Strip from "../../Components/Strip";
import TechnologyCard from "../../Components/TechnologyCard";
import IndustryKnowledgeCard from "../../Components/IndustryKnowledgeCard";
import ProjectCard from "../../Components/ProjectCard";
import Communication from "../../Components/Communication";

import {
  TechnologyData,
  IndustryKnowledgeData,
  ProjectData,
} from "../../Data/Data";

const Home = () => {
  const navigate= useNavigate();
  const TechnologycontainerRef = useRef(null);
  const IndustryKnowledgeRef = useRef(null);
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  const TechnologyhandleMouseDown = (e) => {
    isMouseDown = true;
    startX = e.pageX - TechnologycontainerRef.current.offsetLeft;
    scrollLeft = TechnologycontainerRef.current.scrollLeft;
  };
  const TechnologyhandleMouseUp = () => {
    isMouseDown = false;
  };
  const TechnologyhandleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - TechnologycontainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Daha hızlı kaydırmak için faktörü ayarlayabilirsiniz
    TechnologycontainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const IndustryKnowledgeMouseDown = (e) => {
    isMouseDown = true;
    startX = e.pageX - IndustryKnowledgeRef.current.offsetLeft;
    scrollLeft = IndustryKnowledgeRef.current.scrollLeft;
  };
  const IndustryKnowledgeMouseUp = () => {
    isMouseDown = false;
  };
  const IndustryKnowledgeMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - IndustryKnowledgeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Daha hızlı kaydırmak için faktörü ayarlayabilirsiniz
    IndustryKnowledgeRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <>
      <Header />
      <Welcome />
      <Strip />
      <About />
      <text className={style.TechnologyTitle}>Technology</text>
      <div
        className={style.TechnologyContainer}
        ref={TechnologycontainerRef}
        onMouseDown={TechnologyhandleMouseDown}
        onMouseUp={TechnologyhandleMouseUp}
        onMouseMove={TechnologyhandleMouseMove}
      >
        {TechnologyData.map((e) => {
          return <TechnologyCard img={e.image} title={e.title} key={e.id} />;
        })}
      </div>
      <text className={style.IndustryKnowledgeTitle}>Industry Knowledge</text>
      <div
        className={style.IndustryKnowledgeContainer}
        ref={IndustryKnowledgeRef}
        onMouseDown={IndustryKnowledgeMouseDown}
        onMouseUp={IndustryKnowledgeMouseUp}
        onMouseMove={IndustryKnowledgeMouseMove}
      >
        {IndustryKnowledgeData.map((e) => {
          return (
            <TechnologyCard img={e.image} title={e.title} key={e.id} />
          );
        })}
      </div>
      <div className={style.ProjectsTitleContainer}>
        <div className={style.ProjectsTitle}>Projects</div>
      </div>
      <div className={style.ProjectContainer}>
        {ProjectData.map((e) => {
          return (
            <ProjectCard
              key={e.id}
              banner={e.banner}
              title={e.title}
              technologys={e.technologys}
              githubURL={e.githubURL}
              googleplayURL={e.googleplayURL}
              onClick={()=> navigate(`Detail/${e.id}`)}
            />
          );
        })}
      </div>
      <Communication />
    </>
  );
};

export default Home;
