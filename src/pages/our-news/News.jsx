import React from "react";
import "./news.scss";
import { MyNews } from "./constant";
import { BsArrowRightShort } from "react-icons/bs";

const News = () => {
  return (
    <>
      <div className="container news">
        <h2 className="news-heading"> News </h2>
        <div className="cards">
          {MyNews.map((el) => (
            <div className="card">
              <div className="img">
                <img src={el.img} alt="" className="zoom-image" />
              </div>
              <div className="body">
                <h3> {el.title} </h3>
                <p> {el.date} </p>
                <h6>
                  Read more <BsArrowRightShort className="arrow" />
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
