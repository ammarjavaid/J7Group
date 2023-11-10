import React, { useEffect, useRef } from "react";
import "./heroSection.scss";
import Carousel from "react-bootstrap/Carousel";
import { Slides } from "./constant";
import { Fade } from "react-reveal";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { RiMessage2Fill } from "react-icons/ri";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroSection = () => {
  const carouselRef = useRef(null);

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("pk");

  const handlePhoneChange = (phoneNumber, country) => {
    const extractedCountryCode = phoneNumber.split(" ")[0];

    if (country === extractedCountryCode) {
      setCountryCode(country);
    }

    setPhone(phoneNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Carousel fade className="slide" ref={carouselRef} indicators={false}>
        {Slides.map((item) => (
          <Carousel.Item>
            <img src={item.image} alt="" className="img" />
            <Carousel.Caption>
              <Fade top>
                <h3>{item.title}</h3>
              </Fade>
              <Fade bottom>
                <p>{item.description}</p>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <div className="whatsapp">
        <div className="input-group">
          <label>Hi there, if you need any assistance, I'm always here.</label>
          <input type="text" placeholder="Enter your message..." />
        </div>
        <div className="message-icon-wrapper">
          <RiMessage2Fill className="messgae-icon" />
          <p className="one"> 1 </p>
        </div>
      </div> */}

      {/* form  */}

      <div className="form">
        <h2> Leave your contact and find out more information </h2>
        <p> Our team will contact you shortly. </p>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <PhoneInput
            // country="pk"
            country={countryCode}
            value={phone}
            onChange={(phoneNumber, country) =>
              handlePhoneChange(phoneNumber, country)
            }
            // onChange={(phoneNumber) => setPhone(phoneNumber)}
            style={{ zIndex: 100 }}
            countryCodeEditable={false}
          />
          <button className="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default HeroSection;
