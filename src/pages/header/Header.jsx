import React, { useEffect, useState } from "react";
import { Drawer, Menu, Modal, Space, Button, Form, Input, Select } from "antd";
import "./header.scss";
import { Logo, LogoWhite } from "../../assets";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import Sticky from "react-stickynode";
import PDFOne from "../../assets/pdf/GoldenTulipBrochure.pdf";
import PDFTwo from "../../assets/pdf/Presentation.pdf";
import PDFThree from "../../assets/pdf/PriceList.pdf";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const items = [
    {
      label: (
        <a href="https://www.j7emporium.com/" target="_blank">
          J7 Emporium
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://j7icon.com/" target="_blank">
          J7 Icon
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://j7global.com/" target="_blank">
          J7 Global
        </a>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://signaturehotels.pk/" target="_blank">
          Signature Hotels
        </a>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://signatureresorts.pk/" target="_blank">
          Signature Resorts
        </a>
      ),
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://j7mallchakwal.com/" target="_blank">
          J7 Mall Chakwal
        </a>
      ),
      key: "5",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="https://infinitymall.com.pk/" target="_blank">
          Infinity Mall
        </a>
      ),
      key: "6",
    },
  ];
  const itemsExplore = [
    {
      label: (
        <a href={PDFOne} target="_blank">
          Golden Tultip Hotel
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href={PDFTwo} target="_blank">
          Brochure
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href={PDFThree} target="_blank">
          Rate List
        </a>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="" target="_blank">
          Navigator
        </a>
      ),
      key: "3",
    },
  ];

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const itemsSidebar = [
    getItem("Explore", null, null, [
      getItem(
        "Radisson Hotel Group Presentation",
        "Radisson Hotel Group Presentation"
      ),
      getItem("Brochure", "Brochure"),
      getItem("Rate List", "Rate List"),
      getItem("Navigator", "Navigator"),
    ]),
  ];
  const itemsSide = [
    getItem("J7 Group Projects", null, null, [
      getItem("J7 Emporium", "J7 Emporium"),
      getItem("J7 Mall", "J7 Mall"),
      getItem("J7 One Mall", "J7 One Mall"),
    ]),
  ];

  // fot scrolling

  const location = useLocation();

  const path = window.location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  // modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Sticky enabled={true} top={0} innerZ={1000} activeClass="active">
        <div
          className={`header ${
            isScrolled || path.includes("about") || path.includes("blogs")
              ? "scrolled"
              : ""
          }`}
        >
          <div className="container header-content">
            {isScrolled || path.includes("about") || path.includes("blogs") ? (
              <img src={Logo} alt="" />
            ) : (
              <img src={LogoWhite} alt="" />
            )}
            <ul className="list-items">
              <NavLink to="/">
                <li
                  className={`item ${
                    isScrolled ||
                    path.includes("about") ||
                    path.includes("blogs")
                      ? "scroll"
                      : ""
                  }`}
                >
                  Home
                </li>
              </NavLink>
              <NavLink to="/about">
                <li
                  className={`item ${
                    isScrolled ||
                    path.includes("about") ||
                    path.includes("blogs")
                      ? "scroll"
                      : ""
                  }`}
                >
                  About us
                </li>
              </NavLink>
              <li className={`item ${isScrolled ? "scroll" : ""}`}>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space
                      className={`link-item ${
                        isScrolled ||
                        path.includes("about") ||
                        path.includes("blogs")
                          ? "scroll"
                          : ""
                      }`}
                    >
                      J7 Group Projects
                      <DownOutlined className="downIcon" />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <NavLink to="/blogs">
                <li
                  className={`item ${
                    isScrolled ||
                    path.includes("about") ||
                    path.includes("blogs")
                      ? "scroll"
                      : ""
                  }`}
                >
                  Blogs
                </li>
              </NavLink>
              <li
                className={`item ${
                  isScrolled || path.includes("about") || path.includes("blogs")
                    ? "scroll"
                    : ""
                }`}
              >
                <Dropdown
                  menu={{
                    items: itemsExplore,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space
                      className={`link-item ${
                        isScrolled ||
                        path.includes("about") ||
                        path.includes("blogs")
                          ? "scroll"
                          : ""
                      }`}
                    >
                      Explore
                      <DownOutlined className="downIcon" />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <button className="request" onClick={showModal}>
                Contact us
              </button>
            </ul>
            <div
              className={`social-icons ${
                isScrolled || path.includes("about") || path.includes("blogs")
                  ? "scroll"
                  : ""
              }`}
            >
              <Link
                to="https://www.facebook.com/solitairehotelpk"
                target="_blank"
              >
                <BiLogoFacebook className="fb" />
              </Link>
              <Link
                to="https://www.instagram.com/solitairehotel.pk/"
                target="_blank"
              >
                <AiOutlineInstagram className="insta" />
              </Link>
              <Link to="https://twitter.com/HotelSolitaire" target="_blank">
                <FaXTwitter className="insta x" />
              </Link>
              <Link
                to="https://www.youtube.com/@solitairehotel1327"
                target="_blank"
              >
                <AiFillYoutube className="insta" />
              </Link>
              <HiMiniBars3 onClick={showDrawer} className="toggle-icons" />
            </div>
          </div>
        </div>
      </Sticky>

      {/* Drawer  */}

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className="drawer"
      >
        <div>
          <img src={Logo} alt="" />
          <ul>
            <li
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                setOpen(false);
                navigate("/about");
              }}
            >
              About Us
            </li>
            <Menu
              style={{
                width: 256,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={itemsSide}
            />
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              News
            </li>
            <li
              onClick={() => {
                setOpen(false);
                navigate("/blogs");
              }}
            >
              Blogs
            </li>
            <Menu
              style={{
                width: 256,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={itemsSidebar}
            />
          </ul>
        </div>
        <button className="request" onClick={showModal}>
          Request a call
        </button>
      </Drawer>

      {/* modal  */}

      <Modal
        title="Contact form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <Form.Item
            name="name"
            label="Full Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter phone" />
          </Form.Item>
          <Form.Item
            name="project interest"
            label="Project interest"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select your country!",
              },
            ]}
          >
            <Select placeholder="Hotel Suites">
              <Option value="Hotel Suites">Hotel Suites</Option>
              {/* <Option value="usa">Lahore</Option> */}
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>
          <div className="btn">
            <Button> Submit </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Header;
