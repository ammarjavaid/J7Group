import React from "react";
import "./about.scss";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <h2> We are True to our Words </h2>
          <p>
            Based in Islamabad, J7 Group is an exclusive name for setting the
            ultramodern and highly advanced real estate trends, keeping pace and
            going ahead of their time by developing the super structures in the
            heart of capital. J7 Group has won numerous accolades, including the
            ICCI Business Excellence Award and the Asia Pacific International
            Awards. As a result of their dedication to creating flawless
            structures and completing their projects well ahead of schedule,
            they will create trends in the following years.
          </p>
        </div>
        <OurTeam />
      </div>
    </>
  );
};

export default About;
