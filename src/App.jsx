import React from "react";
import HomeRoutes from "./routes/HomeRoutes";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import QRcode from "./pages/QR-Code/QRcode";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Layout from "./pages/layout/Layout";
import { AiOutlineVideoCamera } from "react-icons/ai";

const App = () => {
  const MyLayout = ({ children }) => {
    return <Layout>{children}</Layout>;
  };

  return (
    <>
      {/* <div className="live-btn">
        <p className="live" onClick={() => navigate("/qrcode")}>
          <AiOutlineVideoCamera />
        </p>
        <p className="dot"> </p>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MyLayout>
                <HomeRoutes />
              </MyLayout>
            }
          />
          <Route path="/qrcode" element={<QRcode />} />
          <Route
            path="/about"
            element={
              <MyLayout>
                <About />
              </MyLayout>
            }
          />
          <Route
            path="/blogs"
            element={
              <MyLayout>
                <Blogs />
              </MyLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
