import React, { useState } from "react";

import {
  FaGlobe,
  FaUserAlt,
  FaClipboardCheck,
  FaLaptopCode,
  FaHandshake,
  FaRegEnvelope,
  FaBars,
} from "react-icons/fa";

import "./Sidebar.css";
import { Link } from "react-scroll";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // window.addEventListener('scroll', () => {
  //     console.log('Scroll event triggered');
  //   });to check the scroll is working

  const menuItem = [
    {
      Link: "hero",
      name: "welcome",
      icon: <FaGlobe />,
    },
    {
      Link: "about",
      name: "AboutME",
      icon: <FaUserAlt />,
    },
    {
      Link: "skills",
      name: "Skills",
      icon: <FaClipboardCheck />,
    },
    {
      Link: "work",
      name: "Work",
      icon: <FaLaptopCode />,
    },
    {
      Link: "testimonial",
      name: "Testimonial",
      icon: <FaHandshake />,
    },
    {
      Link: "contact",
      name: "Contact",
      icon: <FaRegEnvelope />,
    },
  ];
  return (
    <div className="container1">
      <div
        style={{ width: isOpen ? "300px" : "90px", zIndex: isOpen ? 100 : 0 }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Tasneem
          </h1>
          <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.Link}
            key={index}
            className="link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
