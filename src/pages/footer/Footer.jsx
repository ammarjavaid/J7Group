import React from "react";
import "./footer.scss";
import { LogoWhite } from "../../assets";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiTime, BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const naviagte = useNavigate();

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="first-row">
              <div className="img">
                <img src={LogoWhite} alt="" />
              </div>
              <p>
                The Solitaire building is unquestionably the best looking
                edifice inside the city because of its extravagant design and
                impeccable layout. The exquisite construction of the Solitaire
                is a marvel of originality and sincerity as it passes through
                the beautiful Margalla Hills.
              </p>
              <div className="first-row-details">
                <div className="address">
                  <IoLocationOutline className="icon" />
                  <p className="address-text">
                    Plot # B-02, Blue Zone, Top City-1, New Islamabad
                    International Airport.
                  </p>
                </div>
                <div className="phone">
                  <BsFillTelephoneFill
                    style={{ fontSize: "12px" }}
                    className="icon"
                  />
                  <p> +92 331 1111 002 </p>
                </div>
                <div className="mail">
                  <CiMail className="icon" />
                  <p> info@Solitaire.com.pk </p>
                </div>
                <div className="time">
                  <BiTime className="icon" />
                  <p> Mon - Sun / 10:00AM - 6:00PM </p>
                </div>
              </div>
            </div>

            <div className="second-row">
              <h3> Quick Links </h3>
              <ul>
                <li> Commercial </li>
                <li> Business </li>
                <li> House </li>
                <li> Residential </li>
                <li> Residential Tower </li>
                <li> Beverly Hills </li>
                <li> Los Angeles </li>
              </ul>
            </div>

            <div className="third-row">
              <ul>
                <li> The Beach </li>
                <li> Property Listing </li>
                <li> Clasic </li>
                <li> Modern Home </li>
                <li> Luxury </li>
                <li> Beach Pasadena </li>
              </ul>
            </div>

            <div className="fouurth-row">
              <h3> Follow us </h3>
              <p> Stay in touch to get the latest news </p>
              <div className="icons">
                <Link
                  to="https://www.facebook.com/solitairehotelpk"
                  target="_blank"
                >
                  <BiLogoFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/solitairehotel.pk/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </Link>
                <Link to="https://twitter.com/HotelSolitaire" target="_blank">
                  <FaXTwitter />
                </Link>
                {/* <FaLinkedinIn /> */}
                <Link
                  to="https://www.youtube.com/@solitairehotel1327"
                  target="_blank"
                >
                  <AiFillYoutube className="insta" />
                </Link>
                {/* <Link
                  to="https://www.instagram.com/solitairehotel.pk/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </Link> */}
              </div>

              <h3> Newsletter </h3>
              <p>
                Don’t miss to subscribe to our news feeds, kindly <br /> fill
                the form below
              </p>
              <div className="input-group">
                <input type="phone" placeholder="Phone" />
                <button> Subscribe </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
