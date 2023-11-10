import React from "react";
import "./blogs.scss";
import { BlogsData } from "./constant";

const Blogs = () => {
  return (
    <>
      <div className="container">
        <div className="blogs">
          <h2 className="blogs-heading"> Blogs </h2>
          <div className="cards">
            {BlogsData.map((el) => (
              <div className="card">
                <div className="img">
                  <img src={el.img} alt="" className="zoom-image" />
                </div>
                <div className="body">
                  <h2> {el.title} </h2>
                  <p> {el.desc} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
