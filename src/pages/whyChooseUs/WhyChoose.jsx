import React from "react";
import "./choose.scss";
import MyVideo from "../../assets/video/video2.mp4";
import { GoldenTulipLogoWhite } from "../../assets";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <>
      <div className="choose">
        <div className="choose-wrapper">
          <div className="video-aspect-ratio">
            <video width="1500" height="250" autoPlay muted loop playsInline>
              <source src={MyVideo} type="video/mp4" />
            </video>
          </div>
          <div className="container content">
            <div className="content-left">
              {/* <h2> Our Trusted Partner</h2> */}
              <h5>
                We are is pleased to establish a partnership with Golden Tulip
                Hotel.
              </h5>
              <p>
                Solitaire Hotel is proud to announce its collaboration with
                Golden Tulip Hotels. With more than 45 years of hospitality
                experience, Golden Tulip is a leading luxurious hotel worldwide.
                The Golden Tulip hotel chain by Louvre Group dates back to
                1960s, when the first Golden Tulip hotel opened in the
                Netherlands. Today, the brand has expanded across the globe,
                operating in more than 44 countries with 180 hotels. Being
                second largest hospitality group in the world, Louvre group is
                established in 120 countries, with over 10,000 hotels and
                130,000,000 active royalty members.
              </p>
              <p>
                Golden Tulip gives its guests a unique and enjoyable experience
                by providing innovative services. The concept provides 4 star
                international standards with multi-functional open space, great
                digital experience, impactful local game experience and a
                friendly staff attitude. Dedicated to building the future of
                hospitality and ambiance, the Golden Tulip is now a choice of
                millions worldwide
                <Link to="https://www.louvrehotels.com/en-us/" target="_blank">
                  <span> Read more </span>
                </Link>
              </p>
            </div>
            <div className="content-right">
              <div className="img-logo">
                <img src={GoldenTulipLogoWhite} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
