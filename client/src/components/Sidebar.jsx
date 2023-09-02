import React, { useState } from "react";
import home from "../assets/icons/home.svg";
import ambulance from "../assets/icons/ambulance.svg";
import drivers from "../assets/icons/drivers.svg";
import help from "../assets/icons/help.svg";
import logout from "../assets/icons/logout.svg";

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <img src={home} alt="" />,
    },
    {
      path: "/am",
      name: "Ambulance",
      icon: <img src={ambulance} alt="" />,
    },
    {
      path: "/drivers",
      name: "Drivers",
      icon: <img src={drivers} alt="" />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <img src={help} alt="" />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <img src={logout} alt="" />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "283.179px" : "87.418px", height: "973px" }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            LifeSaver
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
