import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(true);
  const showsidebar = () => setsidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showsidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul
            className={sidebar ? "hidden" : "nav-menu-items"}
            onClick={showsidebar}
          >
            {/* <li className="navbar-toggle">
			<Link to="#" className='menu-bars'><AiOutlineClose/></Link>				
			</li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cname}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
