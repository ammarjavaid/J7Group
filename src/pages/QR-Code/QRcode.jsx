import React from "react";
import "./qrcode.scss";
import { LeftSide, Logo, one } from "../../assets";
import { Links } from "./constant";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const QRcode = () => {
  const naviagte = useNavigate();

  return (
    <>
      <div className="qrcode" onClick={() => naviagte("/")}>
        <div className="img">
          <img src={one} alt="" />
          <h5 className="back-icon">
            <IoIosArrowBack />
          </h5>
        </div>

        <div className="container">
          <div className="qr-title">
            {/* <h3> Radisson Blu Hotel & Residences Islamabad </h3> */}
            <h3> Golden Tultip Hotel, Islamabad</h3>
            <h3 className="desc">
              A jewel in the heart of Islamabad: Golden Tulip, Your Gateway to
              investment Success
            </h3>
          </div>

          <div className="social-links">
            {Links.map((el) => (
              <Link to={el.link} target="_blank">
                <div className="box">
                  <img src={el.img} alt="" className="icon" style={el.style} />
                  <div className="title-desc">
                    <h1> {el.title} </h1>
                    <p> {el.desc} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="foot">
          {/* <div className="footer-img">
            <img src={Logo} alt="" />
          </div> */}
          <div className="foot-content">
            <button> PRESENTED BY SOLITAIRE HOTEL </button>
            <h3> UAN: 0331 1111 002 </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRcode;
