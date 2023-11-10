// import React from "react";
import HeroSection from "../pages/hero-section/HeroSection";
import Radisson from "../pages/radisson/Radisson";
import News from "../pages/our-news/News";
import OurPartners from "../pages/our-partners/OurPartners";
import Reviews from "../pages/reviews/Reviews";
import Construction from "../pages/construction/Construction";
import WhyChoose from "../pages/whyChooseUs/WhyChoose";
import Location from "../pages/location/Location";
import Video from "../pages/video-Section/Video";
import "./homeRoutes.scss";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiOutlineVideoCamera } from "react-icons/ai";

const HomeRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="live-btn">
        <p className="live" onClick={() => navigate("/qrcode")}>
          <AiOutlineVideoCamera />
        </p>
        <p className="dot"> </p>
      </div> */}

      <HeroSection />
      <WhyChoose />
      <Radisson />
      <Construction />
      <Location />
      <Video />
      <News />
      <Reviews />
      <OurPartners />
    </>
  );
};

export default HomeRoutes;
