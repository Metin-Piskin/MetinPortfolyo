import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ProjectData } from "../../Data/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

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
      <div className={style.headercontainer}>
        <div className={style.aboutinnercontainer}>
          <img className={style.banner} alt="banner" src={getData?.banner} />
          <div className={style.title}>{getData?.title}</div>
        </div>
        <div className={style.headerStrip}></div>
      </div>
      <div className={style.descriptioncontainer}>
        <div className={style.aboutcontainer}>
          <div className={style.Explanationcontainer}>
            <h2 className={style.ExplanationTitle}>Explanation</h2>
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
      <div className={style.headerStrip} style={{marginTop:55}}></div>

      <div className={style.ReactPlayer}>
        <div className={style.librarycontainer}>
          <div
            className={
              isOpen ? style.libraryopentitle : style.libraryclosetitle
            }
            onClick={toggleAccordion}
          >
            <h1 className={style.librarytext}>Library</h1>
            <span className="icon">
              {isOpen ? (
                <BiChevronDown className={style.BiChevronDown} />
              ) : (
                <BiChevronRight className={style.BiChevronRight} />
              )}
            </span>
          </div>
          <div
            className={
              isOpen ? style.libraryopencontainer : style.libraryclosecontainer
            }
          >
            {isOpen &&
              getData?.library.map((e) => {
                return (
                  <a className={style.librarylistcontainer} href={e.libraryURL}>
                    <li className={style.librarylisttext}>{e.librarytitle}</li>
                  </a>
                );
              })}
          </div>
        </div>
        <ReactPlayer
          url={getData?.video}
          controls // Oynatma kontrollerini göstermek için
          width="250px"
          height="auto"
        />
      </div>
      <Communication />
    </>
  );
};

export default Detail;
