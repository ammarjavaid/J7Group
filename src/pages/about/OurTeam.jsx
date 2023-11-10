import React from "react";
import "./team.scss";
import { ProfileData } from "./constant";

const OurTeam = () => {
  return (
    <>
      <div className="our-team">
        <h2 className="team-heading">Our Management</h2>
        <div className="cards">
          {ProfileData.map((el) => (
            <div className="card">
              <div className="img">
                <img src={el.img} alt="" />
              </div>
              <div className="card-body">
                <div className="card-body-head">
                  <h3> {el.name} </h3>
                  <p> {el.designation} </p>
                </div>
                <p className="desc"> {el.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
