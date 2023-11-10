import React from "react";
import "./radisson.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Radisson = () => {
  // Custom Next Arrow component
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="next" onClick={onClick}>
        <IoIosArrowForward className="r-arrow" />
      </button>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="previos" onClick={onClick}>
        <IoIosArrowBack className="l-arrow" />
      </button>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container markee">
        <h1>Golden Tultip Hotel, Islamabad</h1>
        <p>
          The modern, elegant, and stylish interior decor enhances the feeling
          of a warm and welcoming environment by blending seamlessly with the
          architectural style and overall sense of the building. Aesthetically
          pleasing and minimalistic interior furnishing ensures a wide space
          available for the clients and visitors at the impressive shopping
          center.
        </p>
        {/* <Slider {...settings} className="slider"> */}
        <div className="brands-icon">
          {Data.map((el) => (
            <>
              <div className="box">
                <div className="img">
                  <img src={el.img} alt="" />
                </div>
                <div className="title">
                  <p> {el.title} </p>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
};

export default Radisson;
