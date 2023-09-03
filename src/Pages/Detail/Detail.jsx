import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import { ProjectData } from "../../Data/Data";

const Detail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    if (id) {
      setGetData(ProjectData.find((e) => e.id == id));
    }
  }, [id]);

  return (
    <div>
      <img alt="banner" src={getData?.banner} />
      <div>{getData?.title}</div>
      <div>{getData?.description}</div>
      <ReactPlayer
        url={getData?.video}
        controls // Oynatma kontrollerini göstermek için
        width="100%"
        height="auto"
      />
      {getData?.library.map((e) => {
        return (
          <a href={e.libraryURL}>
            <div>{e.librarytitle}</div>
          </a>
        );
      })}
      {getData?.images.map((e) => {
        return <img key={e.id} alt="images" src={e} />;
      })}
    </div>
  );
};

export default Detail;
