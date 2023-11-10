import React from "react";
import "./location.scss";
import { myLocation } from "./constant";
import { LocationMap } from "../../assets";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="location-left">
          <div className="location-left-wrapper">
            <h1> Location matters, so does your business</h1>

            <div className="location-wrapper">
              {myLocation.map((el) => (
                <div className="location-box">
                  <div className="loacation-box-head">
                    <h2> {el.title} </h2>
                    <img src={el.img} alt="" style={el.style} />
                  </div>
                  <div className="location-box-body">
                    <p> {el.desc} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="location-right">
          <div className="img">
            <img src={LocationMap} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
