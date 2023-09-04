import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ProjectData } from "../../Data/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import style from "./Detail.module.css";
import Communication from "../../Components/Communication";
import Strip from "../../Components/Strip";
import Githublogo from "../../Assets/githublogo.png";
import GooglePlayİcon from "../../Assets/GooglePlayİcon.png";

const Detail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      setGetData(ProjectData.find((e) => e.id == id));
    }
  }, [id]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={style.descriptioncontainer}>
        <div className={style.aboutcontainer}>
          <div className={style.aboutinnercontainer}>
            <img className={style.banner} alt="banner" src={getData?.banner} />
            <div className={style.title}>{getData?.title}</div>
          </div>
          <p className={style.description}>{getData?.description}</p>
          <div className={style.Githubgoogleplaycontainer}>
            {getData?.githubURL ? (
              <a
                className={style.Githubgoogleplaylogocontainer}
                href={getData?.githubURL}
              >
                <img
                  className={style.Githubgoogleplaylogoimage}
                  src={Githublogo}
                  alt={Githublogo}
                />
                <p className={style.Githubgoogleplaylogotext}>Github</p>
              </a>
            ) : (
              <></>
            )}
            {getData?.googleplayURL ? (
              <a
                className={style.Githubgoogleplaylogocontainer}
                href={getData?.googleplayURL}
              >
                <img
                  className={style.Githubgoogleplaylogoimage}
                  src={GooglePlayİcon}
                  alt={GooglePlayİcon}
                />
                <p className={style.Githubgoogleplaylogotext}>GooglePlay</p>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <Carousel
          width={220}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
        >
          {getData?.images.map((e) => {
            return (
              <div>
                <img key={e.id} alt={e} src={e} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Strip />
      <div
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={toggleAccordion}
      >
        <h1>Library</h1>
        <span className="icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen &&
        getData?.library.map((e) => {
          return (
            <a href={e.libraryURL}>
              <div>{e.librarytitle}</div>
            </a>
          );
        })}
      <ReactPlayer
        url={getData?.video}
        controls // Oynatma kontrollerini göstermek için
        width="250px"
        height="auto"
      />
      <Communication />
    </>
  );
};

export default Detail;
