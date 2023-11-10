import React, { useRef } from "react";
import "./reviews.scss";
import { ReviewImg } from "../../assets";
import { Carousel } from "antd";

const Reviews = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const carouselRef = useRef();

  return (
    <>
      <div className="container">
        <div className="review">
          <h2 className="hr-lines"> What People Says</h2>
          <div className="box-wrapper">
            <Carousel
              className="carousel"
              afterChange={onChange}
              slidesToShow={2}
              dots={false}
              ref={carouselRef}
              autoplay={true}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {[1, 2, 3, 4, 5, 6].map((el) => (
                <div className="box">
                  <p className="desc">
                    Thank you walls property help me, choice dream home We were
                    impressed with the build quality, Plus they are
                    competitively priced.
                  </p>
                  <div className="profile-detail">
                    <div className="img">
                      <img src={ReviewImg} alt="" />
                    </div>
                    <div className="name-title">
                      <p className="name"> Jhon Doe </p>
                      <p className="title"> Owner, Digital Agency </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
