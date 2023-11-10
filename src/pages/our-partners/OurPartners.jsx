import React from "react";
import "./partners.scss";
import { Images } from "./constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

const OurPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="partners-wrappers">
      {/* <div className="container-fluid"> */}
      <h2 className="partners-heading"> Our Partners </h2>
      <Slider {...settings}>
        {Images.map((el, index) => (
          <div key={index}>
            {/* <div className="partners-box"> */}
            <div className="img">
              <img src={el.img} alt={`Partner ${index + 1}`} />
            </div>
            {/* </div> */}
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default OurPartners;
