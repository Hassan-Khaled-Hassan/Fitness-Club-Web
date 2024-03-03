import React, { useState } from 'react'

const Navbars = () => {
      const [allowed, setAllowed] = useState(false);
      const handleChange = () => {
        setAllowed(!allowed);
      }; 
      const [activeLink, setActiveLink] = useState("");
      const handleLinkClick = (link: string) => {
        setActiveLink(link);
      };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="">
            Fitness <span>Club</span>
          </a>
        </div>
        <a
          href="javascript:void(0)"
          className={`ham-burger ${allowed ? "active" : ""}`}
          onClick={handleChange}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className={`nav ${allowed ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="#home"
                className={
                  activeLink === "home" || activeLink === "" ? "active" : ""
                }
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className={activeLink === "service" ? "active" : ""}
                onClick={() => handleLinkClick("service")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className={activeLink === "classes" ? "active" : ""}
                onClick={() => handleLinkClick("classes")}
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className={activeLink === "schedule" ? "active" : ""}
                onClick={() => handleLinkClick("schedule")}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#price"
                className={activeLink === "price" ? "active" : ""}
                onClick={() => handleLinkClick("price")}
              >
                Price
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbars