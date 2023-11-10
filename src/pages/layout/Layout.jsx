import React, { Children } from "react";
import "./layout.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="live-btn">
        <p className="live" onClick={() => navigate("/qrcode")}>
          <AiOutlineVideoCamera />
        </p>
        <p className="dot"> </p>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
{
  /* <AiOutlineVideoCamera /> */
}
